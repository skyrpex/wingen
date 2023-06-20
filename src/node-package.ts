import { spawnSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import * as path from "path";
import { Component, JsonFile, Project, javascript } from "projen";
import { parseDesiredSemver } from "./semver";
import { sorted, writeFile } from "./util";

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
  readonly packageManager?: javascript.NodePackageManager;
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

  // private packageObject: PackageJson;
  private packageObject: Record<string, any>;

  private jsonFile: JsonFile;

  public constructor(project: Project, options?: NodePackageOptions) {
    super(project);

    this.deps = options?.deps ?? [];

    this.devDeps = options?.devDeps ?? [];

    this.packageObject = {
      name: project.name,
      version: "0.0.0",
      type: "module",
      sideEffects: false,
      dependencies: {},
      devDependencies: {},
    };

    this.jsonFile = new JsonFile(project, "package.json", {
      obj: this.packageObject,
      newline: true,
    });
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
    this.packageObject.scripts = {
      ...this.packageObject.scripts,
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

    this.packageObject.dependencies = preInstallDeps;
    this.packageObject.devDependencies = preInstallDevDeps;
  }

  private installDependencies() {
    spawnSync("pnpm", ["install"], {
      cwd: this.project.outdir,
      stdio: "inherit",
    });
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

    const pkg = JSON.parse(readFileSync(this.jsonFile.absolutePath, "utf-8"));
    if (
      JSON.stringify(sorted(pkg.dependencies)) ===
        JSON.stringify(postInstallDeps) &&
      JSON.stringify(sorted(pkg.devDependencies)) ===
        JSON.stringify(postInstallDevDeps)
    ) {
      return false;
    }

    pkg.dependencies = { ...postInstallDeps };
    pkg.devDependencies = { ...postInstallDevDeps };
    writeFile(this.jsonFile.absolutePath, `${JSON.stringify(pkg, null, 2)}\n`);
    return true;
  }

  private *findSubNodePackages() {
    for (const subproject of this.project.subprojects) {
      for (const component of subproject.components) {
        if (component instanceof NodePackage) {
          yield component;
        }
      }
    }
  }

  private packageJsonFilesChanged(): boolean {
    for (const subpackage of this.findSubNodePackages()) {
      if (subpackage.jsonFile.changed) {
        return true;
      }
    }
    return false;
  }

  private missingNodeModules(): boolean {
    for (const subpackage of this.findSubNodePackages()) {
      if (!existsSync(path.join(subpackage.project.outdir, "node_modules"))) {
        return true;
      }
    }
    return false;
  }

  private resolveDepsAndWritePackageJsonFiles(): boolean {
    let packageJsonsChanged = false;
    for (const subpackage of this.findSubNodePackages()) {
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

    const why = JSON.parse(
      spawnSync("pnpm", ["why", "--json", ...deps], {
        cwd: this.project.outdir,
      }).stdout.toString()
    );

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
      acc[name] = version.startsWith("link:") ? "workspace:^" : version;
      return acc;
    }, {} as Record<string, string>);
  };
}
