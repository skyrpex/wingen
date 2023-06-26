import { Component, TextFile } from "projen";
import { TypescriptProject } from "./typescript-project";

export class Tsup extends Component {
  constructor(project: TypescriptProject) {
    super(project);

    project.addDevDeps("tsup");
    project.addGitIgnore("/lib");
    project.addScript("dev", "tsup --watch");
    project.addScript("compile", "tsup");
    new TextFile(project, "tsup.config.ts", {
      committed: false,
      lines: [
        'import { defineConfig } from "tsup";',
        "",
        "export default defineConfig({",
        // '  entry: ["src/index.ts"],',
        '  entry: ["src/**/*.ts"],',
        '  outDir: "lib",',
        '  format: ["esm"],',
        '  target: "node18",',
        "  dts: true,",
        "  bundle: false,",
        // "  bundle: true,",
        "  clean: true,",
        "});",
        "",
      ],
    });
  }
}
