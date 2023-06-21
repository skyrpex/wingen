import * as path from "node:path";
import { JsonFile, YamlFile } from "projen";

import { Editorconfig } from "./editorconfig";
import { NodeProject } from "./node-project";
import { ProjenrcTs } from "./projenrc-ts";
import { TypescriptConfig } from "./typescript-config";

export interface MonorepoProjectOptions {
  readonly name: string;
  readonly description?: string;
  readonly outdir?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];
}

/**
 * @pjid monorepo-project
 */
export class MonorepoProject extends NodeProject {
  constructor(options: MonorepoProjectOptions) {
    super({
      ...options,
      projenCommand: "pnpm exec tsx .projenrc.ts",
    });

    this.addFields({
      private: true,
    });

    this.addDevDeps("typescript", "tsx", "@types/node");
    new TypescriptConfig(this, {
      include: [".projenrc.ts"],
    });

    new YamlFile(this, "pnpm-workspace.yaml", {
      committed: false,
      obj: {
        packages: () =>
          this.subprojects.map((subproject) =>
            path.relative(this.outdir, subproject.outdir)
          ),
      },
    });

    this.addDeps("turbo");
    new JsonFile(this, "turbo.json", {
      committed: false,
      marker: false,
      obj: {
        $schema: "https://turborepo.org/schema.json",
        pipeline: {
          dev: {
            persistent: true,
            cache: false,
          },
          compile: {
            dependsOn: ["^compile"],
            outputs: ["dist/**"],
          },
        },
      },
    });

    this.addDeps("prettier");
    new JsonFile(this, ".prettierrc.json", {
      committed: false,
      marker: false,
      obj: {
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
      },
    });

    new Editorconfig(this);

    new JsonFile(this, ".vscode/settings.json", {
      allowComments: true,
      obj: () => ({
        "files.readonlyInclude": {
          ...this.getVscodeReadonlyInclude(),
        },
      }),
    });

    new ProjenrcTs(this);

    this.defaultTask?.reset("tsx .projenrc.ts");
    this.addScript("default", "tsx .projenrc.ts");
  }

  private getVscodeReadonlyInclude() {
    const include: Record<string, boolean> = {};
    for (const subproject of [this, ...this.subprojects]) {
      const outdir = path.relative(this.outdir, subproject.outdir);
      include[path.join(outdir, ".projen/**")] = true;
      include[path.join(outdir, ".turbo/**")] = true;
      include[path.join(outdir, "dist/**")] = true;
      include[path.join(outdir, "node_modules/**")] = true;
      for (const file of subproject.files) {
        if (file.readonly) {
          include[path.join(outdir, file.path)] = true;
        }
      }
    }
    return include;
  }
}
