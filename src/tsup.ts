import { Component, JsonFile } from "projen";
import { TypescriptProject } from "./typescript-project";
export interface TsupOptions {
  readonly define?: Record<string, string>;
}

interface TsupConfigOptions {
  entry: string | string[] | { [entryAlias: string]: string };
  outDir: string;
  format: ("cjs" | "esm" | "iife")[];
  target: string;
  dts: boolean;
  bundle: boolean;
  clean: boolean;
  define?: Record<string, string>;
  treeshake: boolean;
}

const defaultOptions = {
  entry: ["src/**/*.ts"],
  outDir: "lib",
  format: ["esm"],
  target: "node20",

  dts: true,
  bundle: false,
  clean: true,

  treeshake: true,
} satisfies TsupConfigOptions;

export class Tsup extends Component {
  private options: TsupConfigOptions;

  constructor(project: TypescriptProject, options?: TsupOptions) {
    super(project);

    this.options = {
      ...defaultOptions,
      ...options,
    };

    project.addDevDeps("tsup");
    project.addGitIgnore("/lib");
    project.devTask.exec("tsup --watch");
    project.compileTask.exec("tsup");

    new JsonFile(project, "tsup.config.json", {
      obj: () => this.options,
    });
  }

  public addDefine(define: Record<string, string>) {
    this.options.define = { ...this.options.define, ...define };
  }
}
