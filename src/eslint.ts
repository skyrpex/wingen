import { Component, IgnoreFile, JsonFile } from "projen";
import { NodeProject } from "./node-project";

export interface EslintOptions {
  readonly extends: string[];
}

export class Eslint extends Component {
  constructor(project: NodeProject, options: EslintOptions) {
    super(project);

    project.addScript("lint", "eslint --ext .ts,.tsx .");
    // project
    //   .addDevDeps(
    //   // "@cloudy-ts/eslint-plugin",
    //   // "@typescript-eslint/eslint-plugin",
    //   // "@typescript-eslint/parser",
    //   // "eslint-config-prettier",
    //   // "eslint-import-resolver-node",
    //   // "eslint-import-resolver-typescript",
    //   // "eslint-plugin-import",
    //   // "eslint-plugin-jsx-a11y",
    //   // "eslint-plugin-prettier",
    //   // "eslint-plugin-react",
    //   // "eslint-plugin-react-hooks",
    //   // "eslint-plugin-unicorn"
    // );
    new JsonFile(project, ".eslintrc.json", {
      obj: {
        extends: options.extends,
      },
    });

    const ignore = new IgnoreFile(project, ".eslintignore");
    ignore.addPatterns("/.turbo", "/node_modules/");
  }
}
