import { Component, JsonFile, Project } from "projen";

export class TypescriptConfig extends Component {
  constructor(project: Project) {
    super(project);

    new JsonFile(this.project, "tsconfig.json", {
      allowComments: true,
      committed: false,
      obj: {
        compilerOptions: {
          module: "ESNext",
          moduleResolution: "bundler",
          allowArbitraryExtensions: true,
          allowImportingTsExtensions: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          isolatedModules: true,
          noPropertyAccessFromIndexSignature: true,
          noUncheckedIndexedAccess: true,
          noEmit: true,
          downlevelIteration: true,
        },
        include: () => {
          if (this.project.parent === undefined) {
            return [".projenrc.ts"];
          }
          return ["src/**/*"];
        },
      },
    });
  }
}
