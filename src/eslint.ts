import { Component, IgnoreFile, JsonFile } from "projen";
import { NodeProject } from "./node-project";

// export interface EslintOptions {
//   // readonly extends: string[];
// }

export class Eslint extends Component {
  constructor(
    project: NodeProject, // options?: EslintOptions
  ) {
    super(project);

    project.lintTask.exec("eslint --fix --ext .ts,.tsx .");
    project.addDevDeps(
      "eslint@^8",
      "@cloudy-ts/eslint-plugin",
      "@typescript-eslint/eslint-plugin",
      "@typescript-eslint/parser",
      "eslint-config-prettier",
      "eslint-import-resolver-node",
      "eslint-import-resolver-typescript",
      "eslint-plugin-import",
      // "eslint-plugin-jsx-a11y",
      "eslint-plugin-prettier",
      // "eslint-plugin-react",
      // "eslint-plugin-react-hooks",
      "eslint-plugin-unicorn",
    );
    new JsonFile(project, ".eslintrc.json", {
      marker: false,
      obj: {
        // extends: options.extends,
        env: { es2022: true },
        plugins: ["@typescript-eslint", "import", "prettier"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: true,
          ecmaVersion: "latest",
          sourceType: "module",
        },
        extends: [
          "plugin:@typescript-eslint/strict-type-checked",
          "plugin:@typescript-eslint/stylistic-type-checked",
          "plugin:import/recommended",
          "plugin:import/typescript",
          "prettier",
          "plugin:prettier/recommended",
          "plugin:unicorn/recommended",
          "plugin:@cloudy-ts/recommended",
        ],
        rules: {
          "@typescript-eslint/no-unused-vars": [
            "error",
            {
              args: "all",
              argsIgnorePattern: "^_",
              caughtErrors: "all",
              caughtErrorsIgnorePattern: "^_",
              destructuredArrayIgnorePattern: "^_",
              varsIgnorePattern: "^_",
              ignoreRestSiblings: true,
            },
          ],
          "unicorn/prevent-abbreviations": ["off"],
          // "unicorn/prevent-abbreviations": [
          //   "error",
          //   {
          //     ignore: [/props?/i, /dir/i, /dev/i, /env/i, /ref/i],
          //   },
          // ],
          // "unicorn/prefer-module": ["off"],
          "unicorn/no-useless-undefined": ["error", { checkArguments: false }],
          // "unicorn/filename-case": ["off"],
          // "unicorn/prefer-event-target": ["off"],
          "import/order": [
            "error",
            {
              groups: [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
              ],
              alphabetize: {
                order: "asc",
                caseInsensitive: true,
              },
              "newlines-between": "always",
              warnOnUnassignedImports: true,
            },
          ],
          // "react/display-name": ["off"],
        },
      },
    });

    const ignore = new IgnoreFile(project, ".eslintignore");
    ignore.addPatterns("/.turbo", "/dist", "/lib", "/node_modules/");
  }
}
