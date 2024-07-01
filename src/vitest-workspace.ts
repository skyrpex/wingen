import * as path from "node:path";
import { Component, JsonFile } from "projen";
import { MonorepoProject } from "./monorepo-project.js";
import { Vitest } from "./vitest.js";

export class VitestWorkspace extends Component {
  constructor(monorepo: MonorepoProject) {
    super(monorepo);

    monorepo.addDevDeps("vitest");
    monorepo.testTask.reset("vitest run --passWithNoTests");
    new JsonFile(monorepo, "vitest.workspace.json", {
      obj: () =>
        monorepo.subprojects
          .map((project) =>
            project.components.find((component) => component instanceof Vitest),
          )
          .filter((vitest): vitest is Vitest => vitest !== undefined)
          .map((vitest) => path.relative(process.cwd(), vitest.project.outdir)),
    });
  }
}
