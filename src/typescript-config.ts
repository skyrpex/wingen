import { Component, JsonFile, Project } from "projen";

export interface TypescriptConfigOptions {
  readonly include?: string[];
  readonly types?: string[];
}

export class TypescriptConfig extends Component {
  private include: string[];

  private types: string[] | undefined;

  constructor(project: Project, options?: TypescriptConfigOptions) {
    super(project);

    this.include = options?.include ?? [];
    this.types = options?.types;

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
          types: () => this.types,
        },
        include: () => this.include,
      },
    });
  }

  public addInclude(include: string) {
    this.include.push(include);
  }

  public addTypes(types: string) {
    this.types = [...(this.types ?? []), types];
  }
}
