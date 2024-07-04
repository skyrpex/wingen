import { Component, SourceCode } from "projen";
import { Tsup } from "./tsup.js";
import { TypescriptProject } from "./typescript-project";
import { VitestWorkspace } from "./vitest-workspace.js";

export class Vitest extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("vitest");
    // project.addScript("test", "vitest run --passWithNoTests");
    project.testTask.exec("vitest run --passWithNoTests");

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
    // There's no need to define a local test task if there's a vitest workspace at the root.
    // The root's test task will use the vitest workspace and run tests for all subprojects.
    const vitestWorkspace = this.project.root.components.find(
      (component) => component instanceof VitestWorkspace,
    ) as VitestWorkspace | undefined;
    if (vitestWorkspace) {
      this.project.testTask.reset();
    }

    // Allow tsup, if exists, to treeshake the import.meta.vitest blocks in source files.
    const tsup = this.project.components.find(
      (component) => component instanceof Tsup,
    ) as Tsup | undefined;
    tsup?.addDefine({
      "import.meta.vitest": "undefined",
    });
  }
}
