import { execSync } from "node:child_process";

const regExp = /^(.+?)(?:@(.+))?$/;

/**
 *
 * @param dependency The dependency string
 * @returns The desired semver of the dependency.
 * @example
 * parseDesiredSemver("rollup@3") // ["rollup", "3"]
 * parseDesiredSemver("rollup") // ["rollup", undefined]
 * parseDesiredSemver("file:../my-package") // ["@org/package", "file:../my-package"]
 */
export const parseDesiredSemver = (
  dependency: string
): [string, string | undefined] => {
  if (dependency.startsWith("file:") || dependency.startsWith(".")) {
    const name = execSync(`pnpm view ${dependency} name`, {
      encoding: "utf-8",
    }).trimEnd();
    return [name, dependency];
  }

  const result = dependency.match(regExp);
  if (!result || !result[1]) {
    throw new Error(`Invalid dependency string: ${dependency}`);
  }

  return [result[1], result[2]];
};
