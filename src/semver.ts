const regExp = /^(.+?)(?:@(.+))?$/;

/**
 *
 * @param dependency The dependency string
 * @returns The desired semver of the dependency
 * @example
 * parseDesiredSemver("rollup@3") // ["rollup", "3"]
 * parseDesiredSemver("rollup") // ["rollup", undefined]
 */
export const parseDesiredSemver = (
  dependency: string
): [string, string | undefined] => {
  const result = dependency.match(regExp);
  if (!result || !result[1]) {
    throw new Error(`Invalid dependency string: ${dependency}`);
  }

  return [result[1], result[2]];
};
