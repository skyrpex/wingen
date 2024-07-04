import { Project, SampleFile } from "projen";
import { MonorepoProject } from "./monorepo-project";
import { NodeProject } from "./node-project";

export interface NodeEsmProjectOptions {
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

export class NodeEsmProject extends NodeProject {
  constructor(options: NodeEsmProjectOptions) {
    super({
      outdir: `packages/${options.name}`,
      ...options,
      parent: options.monorepo,
    });

    this.addFields({
      type: "module",
      exports: { ".": "./src/index.js" },
      // types: "./src/index.d.ts",
    });

    new SampleFile(this, "src/index.js", {
      contents: ["export default {};", ""].join("\n"),
    });
  }
}
