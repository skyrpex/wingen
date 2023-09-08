import { SampleFile } from "projen";

import {
  Eslint,
  // EslintOptions
} from "./eslint";
import { MonorepoProject } from "./monorepo-project";
import { NodeProject } from "./node-project";
import { Tsup } from "./tsup";
import { TypescriptConfig } from "./typescript-config";
import { Vitest } from "./vitest";

export { NodeProject } from "./node-project";

export interface TypescriptProjectOptions {
  readonly name: string;
  readonly description?: string;
  readonly outdir?: string;
  readonly monorepo: MonorepoProject;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly peerDeps?: string[];
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

export class TypescriptProject extends NodeProject {
  public readonly tsConfig: TypescriptConfig;

  constructor(options: TypescriptProjectOptions) {
    super({
      ...options,
      parent: options.monorepo,
      outdir: options.outdir ?? `packages/${options.name}`,
    });

    this.addFields({
      // main: "./src/index.ts",
      types: "./src/index.ts",
      exports: {
        ".": "./src/index.ts",
      },
      publishConfig: {
        exports: {
          ".": "./lib/index.js",
        },
      },
    });

    this.addDevDeps("typescript", "tsx", "@types/node@18");
    this.tsConfig = new TypescriptConfig(this, {
      include: ["src/**/*"],
    });

    new SampleFile(this, "src/index.ts", {
      contents: ["export {};", ""].join("\n"),
    });

    new Tsup(this);
    new Vitest(this);

    new Eslint(this);
    // // if (options.eslint) {
    // new Eslint(this, {
    //   // extends: options.eslint.extends,
    // });
    // // }
  }
}
