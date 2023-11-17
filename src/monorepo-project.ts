import * as path from "node:path";
import { FileBase, JsonFile, License, YamlFile } from "projen";

import { Editorconfig } from "./editorconfig";
import { Project } from "./project";
import { ProjenrcTs } from "./projenrc-ts";
import { Turbo } from "./turbo.js";
import { TypescriptConfig } from "./typescript-config";

export interface MonorepoProjectOptions {
  readonly name: string;
  readonly description?: string;
  readonly outdir?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];

  readonly license?: string;
  readonly author?: string;
  readonly authorEmail?: string;
  readonly authorOrganization?: boolean;
  readonly copyrightOwner?: string;
  readonly copyrightPeriod?: string;
}

/**
 * @pjid monorepo-project
 */
export class MonorepoProject extends Project {
  readonly license?: string;
  readonly author?: string;
  readonly authorEmail?: string;
  readonly authorOrganization?: boolean;
  readonly copyrightOwner?: string;
  readonly copyrightPeriod?: string;

  constructor(options: MonorepoProjectOptions) {
    super({
      ...options,
      projenCommand: "pnpm exec tsx .projenrc.ts",
    });

    this.addFields({
      private: true,
    });

    this.addDevDeps("projen");

    this.addDevDeps("typescript", "tsx", "@types/node@18");
    new TypescriptConfig(this, {
      include: [".projenrc.ts"],
    });

    new YamlFile(this, "pnpm-workspace.yaml", {
      committed: true,
      obj: {
        packages: () =>
          this.subprojects.map((subproject) =>
            path.relative(this.outdir, subproject.outdir),
          ),
      },
    });

    this.addDeps("turbo");
    new Turbo(this, {
      pipeline: {
        dev: {
          persistent: true,
          cache: false,
        },
        compile: {
          dependsOn: ["^compile"],
          outputs: ["lib/**"],
        },
        lint: {},
        test: {},
      },
    });

    this.addDevDeps("prettier");
    new JsonFile(this, ".prettierrc.json", {
      marker: false,
      obj: {
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
      },
    });

    new Editorconfig(this);

    // new JsonFile(this, ".vscode/settings.json", {
    //   allowComments: true,
    //   obj: () => ({
    //     "files.readonlyInclude": {
    //       ...this.getVscodeReadonlyInclude(),
    //     },
    //   }),
    // });

    new ProjenrcTs(this);

    this.defaultTask?.reset("pnpm exec tsx .projenrc.ts");

    this.compileTask.exec("turbo compile");
    this.devTask.exec("turbo dev");
    this.testTask.exec("turbo test");

    this.license = options.license;
    this.author = options.author;
    this.authorEmail = options.authorEmail;
    this.authorOrganization = options.authorOrganization;
    this.copyrightOwner = options.copyrightOwner;
    this.copyrightPeriod = options.copyrightPeriod;
    if (options.license) {
      this.addFields({
        license: options.license,
      });
      new License(this, {
        spdx: options.license,
        copyrightOwner: options.copyrightOwner,
        copyrightPeriod: options.copyrightPeriod,
      });
    }
  }

  preSynthesize(): void {
    super.preSynthesize();

    for (const project of [this, ...this.subprojects]) {
      const relativeOutdir = path.relative(this.outdir, project.outdir);

      for (const component of project.components) {
        if (component instanceof FileBase) {
          this.gitattributes.addAttributes(
            path.join(relativeOutdir, component.path),
            "linguist-generated=true",
          );
        }
      }
    }
  }

  // private getVscodeReadonlyInclude() {
  //   const include: Record<string, boolean> = {};
  //   for (const subproject of [this, ...this.subprojects]) {
  //     const outdir = path.relative(this.outdir, subproject.outdir);
  //     include[path.join(outdir, ".projen/**")] = true;
  //     include[path.join(outdir, ".turbo/**")] = true;
  //     include[path.join(outdir, "dist/**")] = true;
  //     include[path.join(outdir, "node_modules/**")] = true;
  //     for (const file of subproject.files) {
  //       if (file.readonly) {
  //         include[path.join(outdir, file.path)] = true;
  //       }
  //     }
  //   }
  //   return include;
  // }
}
