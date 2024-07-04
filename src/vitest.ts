import { Component, SourceCode } from "projen";
import { Tsup } from "./tsup.js";
import { TypescriptProject } from "./typescript-project";

export class Vitest extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("vitest");
    project.addScript("test", "vitest run --passWithNoTests");

    const config = new SourceCode(project, "vitest.config.ts");
    config.line(`/* eslint-disable unicorn/no-abusive-eslint-disable */`);
    config.line(`/* eslint-disable */`);
    config.line(`import { defineConfig } from "vitest/config";`);
    config.line(``);
    config.open(`export default defineConfig({`);
    config.open(`test: {`);
    config.line(`includeSource: ["src/**/*.{ts,tsx}"],`);
    config.close(`},`);
    config.close(`});`);
    config.line(``);

    project.tsConfig.addInclude("vitest.config.ts");
    project.tsConfig.addTypes("vitest/importMeta.d.ts");
  }

  preSynthesize(): void {
    const tsup = this.project.components.find(
      (component) => component instanceof Tsup,
    ) as Tsup | undefined;
    tsup?.addDefine({
      "import.meta.vitest": "undefined",
    });
  }
}
