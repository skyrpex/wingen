import { SampleFile } from "projen";

import { NodeProject, NodeProjectOptions } from "./node-project";

export interface NodeCjsProjectOptions extends NodeProjectOptions {}

export class NodeCjsProject extends NodeProject {
  constructor(options: NodeCjsProjectOptions) {
    super({
      ...options,
      outdir: options.outdir ?? `packages/${options.name}`,
    });

    this.addFields({
      type: "commonjs",
      main: "./src/index.cjs",
      // types: "./src/index.cjs",
      // exports: {
      //   ".": "./src/index.cjs",
      // },
    });

    new SampleFile(this, "src/index.cjs", {
      contents: ["module.exports = {};", ""].join("\n"),
    });
  }
}
