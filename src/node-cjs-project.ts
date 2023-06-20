import { Project, SampleFile } from "projen";

import { NodeProject } from "./node-project";

export interface NodeCjsProjectOptions {
  readonly name: string;
  readonly parent?: Project;
  readonly outdir?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];
}

export class NodeCjsProject extends NodeProject {
  constructor(options: NodeCjsProjectOptions) {
    super({
      ...options,
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
