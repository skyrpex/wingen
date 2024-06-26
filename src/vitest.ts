import { Component } from "projen";
import { TypescriptProject } from "./typescript-project";

export class Vitest extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("vitest");
    project.addScript("test", "vitest run --passWithNoTests");
  }
}
