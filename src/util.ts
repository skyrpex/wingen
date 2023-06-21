import { chmodSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import * as path from "node:path";

export interface WriteFileOptions {
  /**
   * Whether the generated file should be marked as executable.
   *
   * @default false
   */
  executable?: boolean;

  /**
   * Whether the generated file should be readonly.
   *
   * @default false
   */
  readonly?: boolean;
}

export function getFilePermissions(options: WriteFileOptions): string {
  const readonly = options.readonly ?? false;
  const executable = options.executable ?? false;
  if (readonly && executable) {
    return "544";
  } else if (readonly) {
    return "444";
  } else if (executable) {
    return "755";
  } else {
    return "644";
  }
}

export function writeFile(
  filePath: string,
  data: any,
  options: WriteFileOptions = {}
) {
  if (existsSync(filePath)) {
    chmodSync(filePath, "600");
  }

  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, data);

  chmodSync(filePath, getFilePermissions(options));
}

/**
 * Returns a sorted version of `x` or `undefined` if it is an empty array or object.
 */
export function sorted<T>(x: T) {
  if (x == null) {
    return undefined;
  }
  if (Array.isArray(x)) {
    if (x.length === 0) {
      return undefined;
    }
    return (x as unknown[]).sort();
  } else if (typeof x === "object") {
    if (Object.keys(x).length === 0) {
      return undefined;
    }
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(x).sort(([l], [r]) =>
      l.localeCompare(r)
    )) {
      result[key] = value;
    }
    return result as T;
  } else {
    return x;
  }
}

/**
 * Returns false if value is unset or a falsey value, and true otherwise.
 * @param value an environment variable
 */
export function isTruthy(value: string | undefined): boolean {
  return !(
    value === undefined ||
    ["null", "undefined", "0", "false", ""].includes(value.toLocaleLowerCase())
  );
}
