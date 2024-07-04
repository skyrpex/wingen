import * as path from "node:path";
import { Component, JsonFile } from "projen";
import { MonorepoProject } from "./monorepo-project.js";
import { Vitest } from "./vitest.js";

export class VitestWorkspace extends Component {
  constructor(monorepo: MonorepoProject) {
    super(monorepo);

    monorepo.addDevDeps("vitest", "@vitest/coverage-v8");
    monorepo.testTask.exec("pnpm exec vitest --passWithNoTests");

    monorepo.addTask("test-coverage", {
      exec: 'pnpm exec vitest run --passWithNoTests --coverage --coverage.exclude=.projenrc.ts --coverage.exclude="**/lib/**" --coverage.exclude="**/coverage/**"',
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
