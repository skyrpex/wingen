import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";
import { Project, ProjenrcFile } from "projen";

// import { TypescriptConfig } from "./typescript-config.js";
import { renderJavaScriptOptions } from "./render-options.js";

export interface ProjenrcTsOptions {
  /**
   * The name of the projenrc file.
   * @default ".projenrc.ts"
   */
  readonly filename?: string;

  /**
   * A directory tree that may contain *.ts files that can be referenced from
   * your projenrc typescript file.
   *
   * @default "projenrc"
   */
  readonly projenCodeDir?: string;

  /**
   * The name of the tsconfig file that will be used by ts-node
   * when compiling projen source files.
   *
   * @default "tsconfig.projen.json"
   */
  readonly tsconfigFileName?: string;
}

/**
 * A projenrc file written in TypeScript
 *
 * This component can be instantiated in any type of project
 * and has no expectations around the project's main language.
 *
 * Requires that `npx` is available.
 */
export class ProjenrcTs extends ProjenrcFile {
  public readonly filePath: string;

  constructor(project: Project, options: ProjenrcTsOptions = {}) {
    super(project);

    this.filePath = options.filename ?? ".projenrc.ts";

    // Use npx since project's deps manager is not guaranteed to be JS-based
    project.defaultTask?.exec(`npx -y tsx ${this.filePath}`);

    this.generateProjenrc();
  }

  // public preSynthesize(): void {
  //   this.tsconfig.addInclude(this.filePath);
  //   this.tsconfig.addInclude(`${this._projenCodeDir}/**/*.ts`);
  // }

  private generateProjenrc() {
    const rcfile = resolve(this.project.outdir, this.filePath);
    if (existsSync(rcfile)) {
      return; // already exists
    }

    const bootstrap = this.project.initProject;
    if (!bootstrap) {
      return;
    }

    const parts = bootstrap.fqn.split(".");
    const moduleName = parts[0];
    const importName = parts[1];

    const { renderedOptions, imports } = renderJavaScriptOptions({
      args: bootstrap.args,
      type: bootstrap.type,
      comments: bootstrap.comments,
    });

    imports.add(moduleName, importName);

    const lines = new Array<string>();
    lines.push(
      'import { MonorepoProject, TypescriptProject } from "@skyrpex/wingen";'
    );
    lines.push("");
    lines.push(`const monorepo = new MonorepoProject(${renderedOptions});`);
    lines.push("");
    lines.push(
      '// const lib = new TypescriptProject({ parent: monorepo, name: "my-lib" });'
    );
    lines.push(
      '// const app = new TypescriptProject({ parent: monorepo, name: "my-app", deps: [lib.name] });'
    );
    lines.push("");
    lines.push("monorepo.synth();");
    lines.push("");

    writeFileSync(rcfile, lines.join("\n"));
    this.project.logger.info(
      `Project definition file was created at ${rcfile}`
    );
  }
}
