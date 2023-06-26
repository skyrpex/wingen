import { Project, SampleFile } from "projen";

import { NodeProject } from "./node-project";

export interface NodeCjsProjectOptions {
  readonly name: string;
  readonly parent?: Project;
  readonly outdir?: string;
  /**
   * The name of the library author.
   * @default $GIT_USER_NAME
   */
  readonly author?: string;
  /**
   * Email of the library author.
   * @default $GIT_USER_EMAIL
   */
  readonly authorEmail?: string;
  /**
   * Whether the author is an organization.
   */
  readonly authorOrganization?: boolean;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly peerDeps?: string[];
  readonly bundledDeps?: string[];
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
