import { Component, SourceCode } from "projen";
import { TypescriptProject } from "./typescript-project";

export class Vitest extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("vitest");
    project.addScript("test", "vitest run --passWithNoTests");

    const config = new SourceCode(project, "vitest.config.ts", {});
    config.line(`/// <reference types="vitest" />`);
    config.line(`/// <reference types="vitest/importMeta.d.ts" />`);
    config.line(`// eslint-ignore`);
    config.line(`import { defineConfig } from "vitest/config";`);
    config.line(``);
    config.open(`export default defineConfig({`);
    config.open(`test: {`);
    config.line(`includeSource: ["src/**/*.{ts,tsx}"],`);
    config.close(`},`);
    config.close(`});`);
    config.line(``);

    project.tsConfig.addInclude("vitest.config.ts");
  }
}
