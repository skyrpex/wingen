import { Component, TextFile } from "projen";
import { TypescriptProject } from "./typescript-project";

export interface TsupOptions {
  readonly entry: string | string[] | { [entryAlias: string]: string };
  readonly outDir: string;
  readonly format: ("cjs" | "esm" | "iife")[];
  readonly target: string;
  readonly dts: boolean;
  readonly bundle: boolean;
  readonly clean: boolean;
}

const defaultOptions: TsupOptions = {
  entry: ["src/**/*.ts"],
  outDir: "lib",
  format: ["esm"],
  target: "node18",
  dts: true,
  bundle: false,
  clean: true,
};

export class Tsup extends Component {
  constructor(project: TypescriptProject, options?: TsupOptions) {
    super(project);

    project.addDevDeps("tsup");
    project.addGitIgnore("/lib");
    project.addScript("dev", "tsup --watch");
    // project.addScript("compile", "tsup");
    project.compileTask.exec("tsup");
    new TextFile(project, "tsup.config.ts", {
      committed: false,
      lines: [
        'import { defineConfig } from "tsup";',
        "",
        `export default defineConfig(${JSON.stringify(
          options ?? defaultOptions,
          undefined,
          2
        )});`,
        "",
      ],
    });
  }
}
