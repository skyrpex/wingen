import { expect, test } from "vitest";
import { parseDesiredSemver } from "../src/semver";

test("should work as expected", () => {
  expect(parseDesiredSemver("rollup@3")).toEqual(["rollup", "3"]);
  expect(parseDesiredSemver("rollup")).toEqual(["rollup", undefined]);
  expect(parseDesiredSemver("@types/node@^1.2.3")).toEqual([
    "@types/node",
    "^1.2.3",
  ]);
  expect(parseDesiredSemver("@types/node")).toEqual(["@types/node", undefined]);
});
