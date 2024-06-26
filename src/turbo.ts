import { Component, JsonFile } from "projen";
import { NodeProject } from "./node-project.js";

export interface TurboWorkspaceProps {
  /**
   * Indicates whether the task exits or not. Setting `persistent` to `true` tells turbo that this is a long-running task and will ensure that other tasks cannot depend on it.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#persistent
   */
  readonly persistent?: boolean;
  /**
   * Whether or not to cache the outputs of the task.
   *
   * Setting cache to false is useful for long-running "watch" or development mode tasks.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#cache
   */
  readonly cache?: boolean;
  /**
   * The list of tasks that this task depends on.
   *
   * Prefixing an item in dependsOn with a ^ prefix tells turbo that this task depends on the package's topological dependencies completing the task first. (e.g. "A package's build tasks should only run once all of its workspace dependencies have completed their own build commands.")
   *
   * Items in dependsOn without a ^ prefix express the relationships between tasks within the same package (e.g. "A package's test and lint commands depend on its own build being completed first.")
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#dependson
   */
  readonly dependsOn?: string[];
  /**
   * The set of glob patterns to consider as inputs to this task.
   *
   * Changes to files covered by these globs will cause a cache miss and the task will be rerun.
   *
   * If a file has been changed that is **not** included in the set of globs, it will not cause a cache miss.
   *
   * If omitted or empty, all files in the package are considered as inputs.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#inputs
   */
  readonly inputs?: string[];
  /**
   * The set of glob patterns indicating a task's cacheable filesystem outputs.
   *
   * Turborepo captures task logs for all tasks. This enables us to cache tasks whose runs produce no artifacts other than logs (such as linters). Logs are always treated as a cacheable artifact and never need to be specified.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#outputs
   */
  readonly outputs?: string[];
  /**
   * A list of environment variables that this task depends on.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#env
   */
  readonly env?: string[];

  /**
   * A priority-ordered (most-significant to least-significant) array of workspace-anchored Unix-style paths to `.env` files to include in the task hash.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#dotEnv
   */
  readonly dotEnv?: string[];
}

export interface TurboProps {
  /**
   * A list of environment variables for implicit global hash dependencies.
   *
   * The variables included in this list will affect all task hashes.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#globalenv
   */
  readonly globalEnv?: string[];

  /**
   * An object representing the task dependency graph of your project. turbo interprets these conventions to schedule, execute, and cache the outputs of tasks in your project.
   *
   * Documentation: https://turbo.build/repo/docs/reference/configuration#tasks
   */
  readonly tasks?: Record<string, TurboWorkspaceProps>;
}

export class Turbo extends Component {
  public constructor(project: NodeProject, props?: TurboProps) {
    super(project);

    new JsonFile(project, "turbo.json", {
      marker: false,
      obj: {
        $schema: "https://turbo.build/schema.json",
        extends: project.parent ? ["//"] : undefined,
        ...props,
      },
    });
  }
}
