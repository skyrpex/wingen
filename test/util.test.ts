import { expect, test, describe } from "vitest";
import { sorted } from "../src/util";

describe("sorted", () => {
  test("sorted records", () => {
    expect(JSON.stringify(sorted({ b: 1, a: 2 }))).toEqual('{"a":2,"b":1}');
  });
});
