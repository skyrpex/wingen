import { Project as ProjenProject, Task } from "projen";

import { NodePackage } from "./node-package";

/**
 * @internal
 */
export interface ProjectOptions {
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
  readonly parent?: ProjenProject;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly peerDeps?: string[];
  readonly bundledDeps?: string[];
  readonly projenCommand?: string;
}

/**
 * @internal
 */
export class Project extends ProjenProject {
  private nodePackage: NodePackage;

  public readonly devTask: Task;

  public readonly postInstallTask: Task;
  public readonly lintTask: Task;

  constructor(options: ProjectOptions) {
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

    this.devTask = this.addTask("dev", {
      description: "Start the development task",
    });

    this.lintTask = this.addTask("lint", {
      description: "Lint the code",
    });

    this.postInstallTask = this.addTask("postinstall", {
      description: "Run after install",
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
