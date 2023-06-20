import { SampleFile } from "projen";

import { MonorepoProject } from "./monorepo-project";
import { NodeProject } from "./node-project";

export interface NodeCjsProjectOptions {
  readonly name: string;
  readonly outdir?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];
}

export class NodeCjsProject extends NodeProject {
  constructor(parent: MonorepoProject, options: NodeCjsProjectOptions) {
    super({
      ...options,
      parent,
      outdir: options.outdir ?? `packages/${options.name}`,
    });

    this.addFields({
      type: "commonjs",
      main: "./src/index.cjs",
      types: "./src/index.cjs",
      exports: {
        ".": "./src/index.cjs",
      },
    });

    new SampleFile(this, "src/index.cjs", {
      contents: ["module.exports = {};", ""].join("\n"),
    });
  }
}
