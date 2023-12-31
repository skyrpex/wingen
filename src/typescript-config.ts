import { Component, JsonFile, Project } from "projen";

export interface TypescriptConfigOptions {
  readonly include?: string[];
}

export class TypescriptConfig extends Component {
  private include: string[];

  constructor(project: Project, options?: TypescriptConfigOptions) {
    super(project);

    this.include = options?.include ?? [];

    new JsonFile(this.project, "tsconfig.json", {
      allowComments: true,
      obj: {
        compilerOptions: {
          module: "ESNext",
          moduleResolution: "Bundler",
          lib: ["ESNext"],
          target: "ESNext",
          allowArbitraryExtensions: true,
          allowImportingTsExtensions: false,
          strict: true,
          forceConsistentCasingInFileNames: true,
          isolatedModules: true,
          noPropertyAccessFromIndexSignature: true,
          noUncheckedIndexedAccess: true,
          noEmit: true,
          downlevelIteration: true,
          verbatimModuleSyntax: true,
        },
        include: () => {
          return this.include;
        },
      },
    });
  }
}
