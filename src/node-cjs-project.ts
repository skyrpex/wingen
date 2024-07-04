import { Project, SampleFile } from "projen";

import { MonorepoProject } from "./monorepo-project";
import { NodeProject } from "./node-project";

export interface NodeCjsProjectOptions {
  readonly name: string;
  readonly description?: string;
  readonly outdir?: string;
  readonly monorepo: MonorepoProject;
  readonly deps?: (string | Project)[];
  readonly devDeps?: (string | Project)[];
  readonly peerDeps?: (string | Project)[];
  readonly bundledDeps?: string[];
  // readonly eslint?: EslintOptions;
  readonly bin?: Record<string, string>;
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
}

export class NodeCjsProject extends NodeProject {
  constructor(options: NodeCjsProjectOptions) {
    super({
      outdir: options.outdir ?? `packages/${options.name}`,
      ...options,
      parent: options.monorepo,
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
