import { cdk, github, javascript } from "projen";

const projenVersion = "0.83.1";
const pnpmVersion = "9.10.0";

const project = new cdk.JsiiProject({
  name: "@skyrpex/wingen",
  author: "Cristian Pallarés",
  authorAddress: "cristian@pallares.pro",
  defaultReleaseBranch: "main",
  repository: "github:skyrpex/wingen",
  repositoryUrl: "https://github.com/skyrpex/wingen.git",
  npmAccess: javascript.NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion,
  projenrcTs: true,
  peerDeps: [`projen@^${projenVersion}`],
  devDeps: [`projen@^${projenVersion}`],
  bundledDeps: ["case"],
  prettier: true,
  autoMerge: false,
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
  },
  minNodeVersion: "18.17.1",
  jsiiVersion: "*",
  projenVersion: `^${projenVersion}`,
});

project.addFields({
  packageManager: `pnpm@${pnpmVersion}`,
});

project.npmrc.addConfig("node-linker", "hoisted");

project.addDevDeps("vitest");
project.testTask.reset("vitest run");
project.deps.removeDependency("ts-jest");
project.deps.removeDependency("jest-junit");
project.deps.removeDependency("jest");
project.deps.removeDependency("@types/jest");

project.gitattributes.addAttributes("/.mergify.yml", "linguist-generated");
project.gitignore.addPatterns("!/.mergify.yml");

project.synth();
