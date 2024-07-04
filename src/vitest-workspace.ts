import * as path from "node:path";
import { Component, JsonFile } from "projen";
import { MonorepoProject } from "./monorepo-project.js";
import { Vitest } from "./vitest.js";

export class VitestWorkspace extends Component {
  static readonly TEST_EXEC = "vitest --passWithNoTests";
  static readonly TEST_COVERAGE_EXEC =
    'vitest run --passWithNoTests --coverage --coverage.exclude=.projenrc.ts --coverage.exclude="**/lib/**" --coverage.exclude="**/coverage/**"';

  constructor(monorepo: MonorepoProject) {
    super(monorepo);

    monorepo.addDevDeps("vitest", "@vitest/coverage-v8");
    monorepo.testTask.exec(`pnpm exec ${VitestWorkspace.TEST_EXEC}`);

    monorepo.addTask("test-coverage", {
      exec: `pnpm exec ${VitestWorkspace.TEST_COVERAGE_EXEC}`,
    });

    new JsonFile(monorepo, "vitest.workspace.json", {
      obj: () =>
        monorepo.subprojects
          .map((project) =>
            project.components.find((component) => component instanceof Vitest),
          )
          .filter((vitest): vitest is Vitest => vitest !== undefined)
          .map(
            (vitest) =>
              `${path.relative(process.cwd(), vitest.project.outdir)}/vitest.config.ts`,
          ),
    });

    monorepo.addGitIgnore("/coverage/");
  }
}
