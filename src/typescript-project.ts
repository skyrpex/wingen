import { Project, SampleFile, TextFile } from "projen";

import { Eslint, EslintOptions } from "./eslint";
import { NodeProject } from "./node-project";
import { TypescriptConfig } from "./typescript-config";

export { NodeProject } from "./node-project";

export interface TypescriptProjectOptions {
  readonly name: string;
  readonly outdir?: string;
  readonly parent?: Project;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly eslint?: EslintOptions;
}

export class TypescriptProject extends NodeProject {
  public readonly tsConfig: TypescriptConfig;

  constructor(options: TypescriptProjectOptions) {
    super({
      ...options,
      outdir: options.outdir ?? `packages/${options.name}`,
    });

    this.addFields({
      // main: "./src/index.ts",
      // types: "./src/index.ts",
      exports: {
        ".": "./src/index.ts",
      },
      publishConfig: {
        exports: {
          ".": "./dist/index.js",
        },
      },
    });

    this.addDevDeps("typescript", "tsx", "@types/node");
    this.tsConfig = new TypescriptConfig(this, {
      include: ["src/**/*"],
    });

    new SampleFile(this, "src/index.ts", {
      contents: [
        'import { version } from "../package.json" assert { type: "json" };',
        "",
        "export { version };",
        "",
      ].join("\n"),
    });

    this.addDevDeps("tsup");
    this.addGitIgnore("/dist");
    this.addGitIgnore("/.turbo");
    this.addScript("dev", "tsup --watch");
    this.addScript("compile", "tsup");
    new TextFile(this, "tsup.config.ts", {
      committed: false,
      lines: [
        'import { defineConfig } from "tsup";',
        "",
        "export default defineConfig({",
        '  entry: ["src/index.ts"],',
        '  format: ["esm"],',
        '  target: "node18",',
        "  dts: true,",
        "  bundle: false,",
        // "  bundle: true,",
        "  clean: true,",
        "});",
        "",
      ],
    });

    if (options.eslint) {
      new Eslint(this, {
        extends: options.eslint.extends,
      });
    }
  }
}
