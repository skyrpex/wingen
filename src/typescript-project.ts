import { SampleFile, TextFile } from "projen";

import { Eslint, EslintOptions } from "./eslint";
import { MonorepoProject } from "./monorepo-project";
import { NodeProject } from "./node-project";
import { TypescriptConfig } from "./typescript-config";

export { NodeProject } from "./node-project";

export interface TypescriptProjectOptions {
  readonly name: string;
  readonly outdir?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly eslint?: EslintOptions;
}

export class TypescriptProject extends NodeProject {
  constructor(parent: MonorepoProject, options: TypescriptProjectOptions) {
    super({
      ...options,
      parent,
      outdir: options.outdir ?? `packages/${options.name}`,
    });

    this.addFields({
      main: "./src/index.ts",
      types: "./src/index.ts",
      exports: {
        ".": "./src/index.ts",
      },
    });

    this.addDevDeps("typescript", "tsx", "@types/node");
    new TypescriptConfig(this);

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
        "  sourcemap: true,",
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
