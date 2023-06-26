import { License, Project } from "projen";

import { NodePackage } from "./node-package";

// export { Project } from "projen";

export interface NodeProjectOptions {
  readonly name: string;
  readonly description?: string;
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
  readonly bin?: Record<string, string>;
  readonly outdir?: string;
  readonly parent?: Project;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly peerDeps?: string[];
  readonly bundledDeps?: string[];
  readonly projenCommand?: string;
}

export class NodeProject extends Project {
  private nodePackage: NodePackage;

  constructor(options: NodeProjectOptions) {
    super({
      ...options,
      commitGenerated: false,
    });

    this.addGitIgnore("/.projen");
    this.addGitIgnore("/.turbo");

    this.nodePackage = new NodePackage(this, {
      deps: options.deps,
      devDeps: options.devDeps,
      peerDeps: options.peerDeps,
      bundledDeps: options.bundledDeps,
      bin: options.bin,
    });

    this.nodePackage.addFields({
      license: "MIT",
    });
    new License(this, {
      spdx: "MIT",
      copyrightOwner: "Monada",
      copyrightPeriod: "2023-current",
    });

    if (options.author || options.authorEmail || options.authorOrganization) {
      this.nodePackage.addFields({
        author: {
          name: options.author,
          email: options.authorEmail,
          organization: options.authorOrganization,
        },
      });
    }
  }

  public addDeps(...deps: string[]) {
    this.nodePackage.addDeps(...deps);
  }

  public addDevDeps(...devDeps: string[]) {
    this.nodePackage.addDevDeps(...devDeps);
  }

  public addScript(name: string, command: string) {
    this.nodePackage.setScript(name, command);
  }

  public addFields(fields: Record<string, any>) {
    this.nodePackage.addFields(fields);
  }
}
