import { Project } from "projen";

import { NodePackage } from "./node-package";

export { Project } from "projen";

export interface NodeProjectOptions {
  readonly name: string;
  readonly outdir?: string;
  readonly parent?: Project;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly projenCommand?: string;
}

export class NodeProject extends Project {
  private nodePackage: NodePackage;

  constructor(options: NodeProjectOptions) {
    super({
      ...options,
      commitGenerated: false,
    });

    this.addGitIgnore(".projen");

    this.nodePackage = new NodePackage(this, {
      deps: options.deps,
      devDeps: options.devDeps,
    });
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
