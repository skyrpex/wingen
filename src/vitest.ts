import { Component, SourceCode } from "projen";
import { Tsup } from "./tsup.js";
import { TypescriptProject } from "./typescript-project";

export class Vitest extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("vitest", "@vitest/coverage-v8");
    project.testTask.exec("pnpm exec vitest run --passWithNoTests");

    project.addTask("test-coverage", {
      exec: "pnpm exec vitest run --passWithNoTests --coverage",
    });

    project.addGitIgnore("/coverage/");

    const config = new SourceCode(project, "vitest.config.ts");
    config.line(`/* eslint-disable unicorn/no-abusive-eslint-disable */`);
    config.line(`/* eslint-disable */`);
    config.line(
      `import { configDefaults, defineConfig } from "vitest/config";`,
    );
    config.line(``);
    config.open(`export default defineConfig({`);
    config.open(`test: {`);
    config.line(`includeSource: ["src/**/*.{ts,tsx}"],`);
    config.open(`coverage: {`);
    config.line(
      `exclude: [...(configDefaults.coverage.exclude ?? []), "lib/**", "coverage/**"],`,
    );
    config.close(`},`);
    config.close(`},`);
    config.close(`});`);
    config.line(``);

    project.tsConfig.addInclude("vitest.config.ts");
    project.tsConfig.addTypes("vitest/importMeta.d.ts");
  }

  preSynthesize(): void {
    // Allow tsup, if exists, to treeshake the import.meta.vitest blocks in source files.
    const tsup = this.project.components.find(
      (component) => component instanceof Tsup,
    ) as Tsup | undefined;
    tsup?.addDefine({
      "import.meta.vitest": "undefined",
    });
  }
}
