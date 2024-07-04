import { License } from "projen";
import { MonorepoProject } from "./monorepo-project";
import { Project, ProjectOptions } from "./project";

export interface NodeProjectOptions extends ProjectOptions {
  readonly parent: MonorepoProject;

  readonly files?: string[];
  readonly exports?: string | Record<string, string>;
}

export class NodeProject extends Project {
  constructor(options: NodeProjectOptions) {
    super(options);

    this.addFields({
      files: options.files,
      exports: options.exports,
    });

    if (options.parent.license) {
      this.addFields({
        license: options.parent.license,
      });
      new License(this, {
        spdx: options.parent.license,
        copyrightOwner: options.parent.copyrightOwner,
        copyrightPeriod: options.parent.copyrightPeriod,
      });
    }
  }
}
