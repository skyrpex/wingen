import { cdk, github, javascript } from "projen";

const project = new cdk.JsiiProject({
  name: "@skyrpex/wingen",
  author: "Cristian Pallarés",
  authorAddress: "cristian@pallares.pro",
  defaultReleaseBranch: "main",
  repository: "github:skyrpex/wingen",
  repositoryUrl: "https://github.com/skyrpex/wingen.git",
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: "8",
  npmAccess: javascript.NpmAccess.PUBLIC,
  projenrcTs: true,
  peerDeps: ["projen"],
  devDeps: ["projen"],
  bundledDeps: ["case"],
  prettier: true,
  autoMerge: false,
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
  },
});

project.addDevDeps("vitest");
project.testTask.reset("vitest run");
project.deps.removeDependency("ts-jest");
project.deps.removeDependency("jest-junit");
project.deps.removeDependency("jest");
project.deps.removeDependency("@types/jest");

project.gitattributes.addAttributes("/.mergify.yml", "linguist-generated");
project.gitignore.addPatterns("!/.mergify.yml");

project.synth();
