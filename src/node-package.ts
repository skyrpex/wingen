import { spawnSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import * as path from "path";
import {
  Component,
  JsonFile,
  Project,
  Task,
  TaskRuntime,
  // javascript,
} from "projen";
import { parseDesiredSemver } from "./semver";
import { isTruthy, sorted, writeFile } from "./util";

const getDesiredVersions = (
  deps: string[]
): Record<string, string | undefined> => {
  const desiredDeps: Record<string, string | undefined> = {};
  for (const dep of deps) {
    const [name, semver] = parseDesiredSemver(dep);
    desiredDeps[name] = semver;
  }
  return desiredDeps;
};

const getPreInstallVersions = (
  desiredVersions: Record<string, string | undefined>,
  installedVersions: Record<string, string>
): Record<string, string> => {
  const deps: Record<string, string> = {};
  for (const [name, desiredVersion] of Object.entries(desiredVersions)) {
    let installedVersion = installedVersions[name];
    if (installedVersion && !installedVersion.startsWith("workspace:")) {
      installedVersion = `^${installedVersion}`;
    }
    deps[name] = desiredVersion ?? installedVersion ?? "latest";
  }
  return deps;
};

const getPostInstallVersions = (
  installedVersions: Record<string, string>,
  desiredVersions: Record<string, string | undefined>
): Record<string, string> => {
  const deps: Record<string, string> = {};
  for (const [name, version] of Object.entries(installedVersions)) {
    deps[name] = version.startsWith("workspace:") ? version : `^${version}`;
  }
  for (const [name, desiredVersion] of Object.entries(desiredVersions)) {
    if (desiredVersion) {
      deps[name] = desiredVersion;
    }
  }
  return deps;
};

export interface NodePackageOptions {
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly peerDeps?: string[];
  readonly bundledDeps?: string[];
  // readonly packageManager?: javascript.NodePackageManager;
  readonly bin?: Record<string, string>;
}

// interface PackageJson {
//   name?: string | undefined;
//   version: string;
//   type: "module";
//   dependencies: Record<string, string>;
//   devDependencies: Record<string, string>;
// }

export class NodePackage extends Component {
  private deps: string[];

  private devDeps: string[];

  // private peerDeps: string[];

  private bundledDeps: string[];

  // private packageObject: PackageJson;
  private packageObject: Record<string, any>;

  private jsonFile: JsonFile;

  private installTask: Task;

  private installCiTask: Task;

  private scripts: Record<string, string>;

  public constructor(project: Project, options?: NodePackageOptions) {
    super(project);

    this.deps = [...(options?.deps ?? []), ...(options?.bundledDeps ?? [])];

    this.devDeps = options?.devDeps ?? [];

    // this.peerDeps = options?.peerDeps ?? [];

    this.bundledDeps = options?.bundledDeps ?? [];

    this.scripts = {};

    this.packageObject = {
      name: project.name,
      version: "0.0.0",
      type: "module",
      sideEffects: false,
      bin: options?.bin,
      dependencies: {},
      devDependencies: {},
      peerDependencies: () => undefined,
      bundledDependencies: () => {
        if (this.bundledDeps.length === 0) {
          return undefined;
        }

        return this.bundledDeps.map((dep) => {
          const [name] = parseDesiredSemver(dep);
          return name;
        });
      },
      scripts: () => {
        const scripts: Record<string, string> = {
          ...this.scripts,
        };
        for (const task of this.project.tasks.all) {
          if (task.name === "install" || task.name === "install:ci") {
            continue;
          }

          if (task.steps.length === 0) {
            continue;
          }

          scripts[task.name] = `projen ${task.name}`;
        }
        return scripts;
      },
    };

    this.jsonFile = new JsonFile(project, "package.json", {
      obj: this.packageObject,
    });

    this.installTask = project.addTask("install", {
      description:
        "Install project dependencies and update lockfile (non-frozen)",
      exec: "pnpm install --no-frozen-lockfile",
    });

    this.installCiTask = project.addTask("install:ci", {
      description: "Install project dependencies using frozen lockfile",
      exec: "pnpm install --frozen-lockfile",
    });

    this.setScript("preinstall", "npx only-allow pnpm");
  }

  public addDeps(...deps: string[]) {
    this.deps.push(...deps);
  }

  public addDevDeps(...devDeps: string[]) {
    this.devDeps.push(...devDeps);
  }

  public addFields(fields: Record<string, any>) {
    Object.assign(this.packageObject, fields);
  }

  public setScript(name: string, script: string) {
    this.scripts = {
      ...this.scripts,
      [name]: script,
    };
  }

  public preSynthesize(): void {
    super.preSynthesize();

    const desiredDeps = getDesiredVersions(this.deps);
    const desiredDevDeps = getDesiredVersions(this.devDeps);

    const installedDeps = this.getInstalledVersions(this.deps);
    const installedDevDeps = this.getInstalledVersions(this.devDeps);

    const preInstallDeps = getPreInstallVersions(desiredDeps, installedDeps);
    const preInstallDevDeps = getPreInstallVersions(
      desiredDevDeps,
      installedDevDeps
    );

    this.packageObject.dependencies = sorted(preInstallDeps);
    this.packageObject.devDependencies = sorted(preInstallDevDeps);
  }

  /**
   * Returns `true` if we are running within a CI build.
   */
  private get isAutomatedBuild(): boolean {
    return isTruthy(process.env.CI);
  }

  private installDependencies() {
    this.project.logger.info("Installing dependencies...");
    const runtime = new TaskRuntime(this.project.outdir);
    const taskToRun = this.isAutomatedBuild
      ? this.installCiTask
      : this.installTask;
    runtime.runTask(taskToRun.name);
  }

  private resolveDepsAndWritePackageJson(): boolean {
    const installedDeps = this.getInstalledVersions(this.deps);
    const installedDevDeps = this.getInstalledVersions(this.devDeps);

    const postInstallDeps = sorted(
      getPostInstallVersions(installedDeps, getDesiredVersions(this.deps))
    );
    const postInstallDevDeps = sorted(
      getPostInstallVersions(installedDevDeps, getDesiredVersions(this.devDeps))
    );
    // console.log({ postInstallDevDeps });

    const pkg = JSON.parse(readFileSync(this.jsonFile.absolutePath, "utf-8"));
    if (
      JSON.stringify(sorted(pkg.dependencies)) ===
        JSON.stringify(postInstallDeps) &&
      JSON.stringify(sorted(pkg.devDependencies)) ===
        JSON.stringify(postInstallDevDeps)
    ) {
      return false;
    }

    // pkg.dependencies = { ...postInstallDeps };
    // pkg.devDependencies = { ...postInstallDevDeps };
    // pkg.dependencies = postInstallDeps;
    // pkg.devDependencies = postInstallDevDeps;
    Object.assign(pkg, {
      dependencies: postInstallDeps,
      devDependencies: postInstallDevDeps,
    });
    writeFile(this.jsonFile.absolutePath, `${JSON.stringify(pkg, null, 2)}\n`, {
      executable: this.jsonFile.executable,
      readonly: this.jsonFile.readonly,
    });
    return true;
  }

  private *findAllNodePackages() {
    for (const subproject of [this.project, ...this.project.subprojects]) {
      for (const component of subproject.components) {
        if (component instanceof NodePackage) {
          yield component;
        }
      }
    }
  }

  private packageJsonFilesChanged(): boolean {
    for (const subpackage of this.findAllNodePackages()) {
      if (subpackage.jsonFile.changed) {
        return true;
      }
    }
    return false;
  }

  private missingNodeModules(): boolean {
    for (const subpackage of this.findAllNodePackages()) {
      if (!existsSync(path.join(subpackage.project.outdir, "node_modules"))) {
        return true;
      }
    }
    return false;
  }

  private resolveDepsAndWritePackageJsonFiles(): boolean {
    let packageJsonsChanged = false;
    for (const subpackage of this.findAllNodePackages()) {
      packageJsonsChanged =
        subpackage.resolveDepsAndWritePackageJson() || packageJsonsChanged;
    }
    packageJsonsChanged =
      this.resolveDepsAndWritePackageJson() || packageJsonsChanged;
    return packageJsonsChanged;
  }

  public postSynthesize() {
    super.postSynthesize();

    if (this.project.parent) {
      return;
    }

    if (this.packageJsonFilesChanged() || this.missingNodeModules()) {
      this.installDependencies();
    }

    if (this.resolveDepsAndWritePackageJsonFiles()) {
      this.installDependencies();
    }
  }

  private getInstalledVersions = (deps: string[]): Record<string, string> => {
    deps = deps.filter((dep) => dep.startsWith(".") === false);

    if (deps.length === 0) {
      return {};
    }

    if (!existsSync(this.jsonFile.absolutePath)) {
      return {};
    }

    const json = spawnSync("pnpm", ["ls", "--json"], {
      cwd: this.project.outdir,
    }).stdout.toString();
    const why = JSON.parse(json);

    const [{ dependencies, devDependencies }] = why as [
      {
        dependencies: Record<string, { version: string }>;
        devDependencies: Record<string, { version: string }>;
      }
    ];
    return Object.entries({
      ...dependencies,
      ...devDependencies,
    }).reduce((acc, [name, { version }]) => {
      if (deps.includes(name)) {
        acc[name] = version.startsWith("link:") ? "workspace:^" : version;
      }
      return acc;
    }, {} as Record<string, string>);
  };
}
