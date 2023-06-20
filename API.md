# replace this
# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### EslintOptions <a name="EslintOptions" id="wingen.EslintOptions"></a>

#### Initializer <a name="Initializer" id="wingen.EslintOptions.Initializer"></a>

```typescript
import { EslintOptions } from 'wingen'

const eslintOptions: EslintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.EslintOptions.property.extends">extends</a></code> | <code>string[]</code> | *No description.* |

---

##### `extends`<sup>Required</sup> <a name="extends" id="wingen.EslintOptions.property.extends"></a>

```typescript
public readonly extends: string[];
```

- *Type:* string[]

---

### MonorepoProjectOptions <a name="MonorepoProjectOptions" id="wingen.MonorepoProjectOptions"></a>

#### Initializer <a name="Initializer" id="wingen.MonorepoProjectOptions.Initializer"></a>

```typescript
import { MonorepoProjectOptions } from 'wingen'

const monorepoProjectOptions: MonorepoProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.MonorepoProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wingen.MonorepoProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.MonorepoProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="wingen.MonorepoProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

### NodeCjsProjectOptions <a name="NodeCjsProjectOptions" id="wingen.NodeCjsProjectOptions"></a>

#### Initializer <a name="Initializer" id="wingen.NodeCjsProjectOptions.Initializer"></a>

```typescript
import { NodeCjsProjectOptions } from 'wingen'

const nodeCjsProjectOptions: NodeCjsProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeCjsProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.NodeCjsProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="wingen.NodeCjsProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="wingen.NodeCjsProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="wingen.NodeCjsProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

### NodePackageOptions <a name="NodePackageOptions" id="wingen.NodePackageOptions"></a>

#### Initializer <a name="Initializer" id="wingen.NodePackageOptions.Initializer"></a>

```typescript
import { NodePackageOptions } from 'wingen'

const nodePackageOptions: NodePackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodePackageOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodePackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodePackageOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |

---

##### `deps`<sup>Optional</sup> <a name="deps" id="wingen.NodePackageOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="wingen.NodePackageOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="wingen.NodePackageOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

### NodeProjectOptions <a name="NodeProjectOptions" id="wingen.NodeProjectOptions"></a>

#### Initializer <a name="Initializer" id="wingen.NodeProjectOptions.Initializer"></a>

```typescript
import { NodeProjectOptions } from 'wingen'

const nodeProjectOptions: NodeProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wingen.NodeProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodeProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.NodeProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wingen.NodeProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#wingen.NodeProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.NodeProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="wingen.NodeProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="wingen.NodeProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="wingen.NodeProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.NodeProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="wingen.NodeProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

---

### TypescriptProjectOptions <a name="TypescriptProjectOptions" id="wingen.TypescriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="wingen.TypescriptProjectOptions.Initializer"></a>

```typescript
import { TypescriptProjectOptions } from 'wingen'

const typescriptProjectOptions: TypescriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wingen.TypescriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.TypescriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wingen.TypescriptProjectOptions.property.eslint">eslint</a></code> | <code><a href="#wingen.EslintOptions">EslintOptions</a></code> | *No description.* |
| <code><a href="#wingen.TypescriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.TypescriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="wingen.TypescriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="wingen.TypescriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="wingen.TypescriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: EslintOptions;
```

- *Type:* <a href="#wingen.EslintOptions">EslintOptions</a>

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="wingen.TypescriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### Editorconfig <a name="Editorconfig" id="wingen.Editorconfig"></a>

#### Initializers <a name="Initializers" id="wingen.Editorconfig.Initializer"></a>

```typescript
import { Editorconfig } from 'wingen'

new Editorconfig(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Editorconfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.Editorconfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.Editorconfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#wingen.Editorconfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#wingen.Editorconfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.Editorconfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.Editorconfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="wingen.Editorconfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Editorconfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.Editorconfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Eslint <a name="Eslint" id="wingen.Eslint"></a>

#### Initializers <a name="Initializers" id="wingen.Eslint.Initializer"></a>

```typescript
import { Eslint } from 'wingen'

new Eslint(project: NodeProject, options: EslintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Eslint.Initializer.parameter.project">project</a></code> | <code><a href="#wingen.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#wingen.Eslint.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.EslintOptions">EslintOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.Eslint.Initializer.parameter.project"></a>

- *Type:* <a href="#wingen.NodeProject">NodeProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.Eslint.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.EslintOptions">EslintOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.Eslint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#wingen.Eslint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#wingen.Eslint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.Eslint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.Eslint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="wingen.Eslint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Eslint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.Eslint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### MonorepoProject <a name="MonorepoProject" id="wingen.MonorepoProject"></a>

#### Initializers <a name="Initializers" id="wingen.MonorepoProject.Initializer"></a>

```typescript
import { MonorepoProject } from 'wingen'

new MonorepoProject(options: MonorepoProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.MonorepoProject.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.MonorepoProjectOptions">MonorepoProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.MonorepoProject.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.MonorepoProjectOptions">MonorepoProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.MonorepoProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#wingen.MonorepoProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#wingen.MonorepoProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#wingen.MonorepoProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#wingen.MonorepoProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#wingen.MonorepoProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#wingen.MonorepoProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#wingen.MonorepoProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#wingen.MonorepoProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#wingen.MonorepoProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#wingen.MonorepoProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#wingen.MonorepoProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#wingen.MonorepoProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#wingen.MonorepoProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#wingen.MonorepoProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#wingen.MonorepoProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="wingen.MonorepoProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="wingen.MonorepoProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="wingen.MonorepoProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="wingen.MonorepoProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="wingen.MonorepoProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="wingen.MonorepoProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="wingen.MonorepoProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="wingen.MonorepoProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="wingen.MonorepoProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="wingen.MonorepoProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="wingen.MonorepoProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="wingen.MonorepoProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="wingen.MonorepoProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.MonorepoProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.MonorepoProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="wingen.MonorepoProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="wingen.MonorepoProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="wingen.MonorepoProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="wingen.MonorepoProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="wingen.MonorepoProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="wingen.MonorepoProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.MonorepoProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="wingen.MonorepoProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.MonorepoProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="wingen.MonorepoProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.MonorepoProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="wingen.MonorepoProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.MonorepoProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="wingen.MonorepoProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="wingen.MonorepoProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="wingen.MonorepoProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="wingen.MonorepoProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="wingen.MonorepoProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="wingen.MonorepoProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="wingen.MonorepoProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="wingen.MonorepoProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="wingen.MonorepoProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.MonorepoProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#wingen.MonorepoProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#wingen.MonorepoProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#wingen.MonorepoProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#wingen.MonorepoProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#wingen.MonorepoProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#wingen.MonorepoProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#wingen.MonorepoProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#wingen.MonorepoProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#wingen.MonorepoProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#wingen.MonorepoProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#wingen.MonorepoProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#wingen.MonorepoProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#wingen.MonorepoProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#wingen.MonorepoProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#wingen.MonorepoProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.MonorepoProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#wingen.MonorepoProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#wingen.MonorepoProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="wingen.MonorepoProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="wingen.MonorepoProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="wingen.MonorepoProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="wingen.MonorepoProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="wingen.MonorepoProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="wingen.MonorepoProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="wingen.MonorepoProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="wingen.MonorepoProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="wingen.MonorepoProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="wingen.MonorepoProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.MonorepoProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="wingen.MonorepoProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="wingen.MonorepoProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="wingen.MonorepoProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="wingen.MonorepoProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="wingen.MonorepoProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="wingen.MonorepoProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="wingen.MonorepoProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="wingen.MonorepoProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="wingen.MonorepoProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="wingen.MonorepoProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="wingen.MonorepoProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="wingen.MonorepoProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.MonorepoProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.MonorepoProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="wingen.MonorepoProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NodeCjsProject <a name="NodeCjsProject" id="wingen.NodeCjsProject"></a>

#### Initializers <a name="Initializers" id="wingen.NodeCjsProject.Initializer"></a>

```typescript
import { NodeCjsProject } from 'wingen'

new NodeCjsProject(parent: MonorepoProject, options: NodeCjsProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeCjsProject.Initializer.parameter.parent">parent</a></code> | <code><a href="#wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.NodeCjsProjectOptions">NodeCjsProjectOptions</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="wingen.NodeCjsProject.Initializer.parameter.parent"></a>

- *Type:* <a href="#wingen.MonorepoProject">MonorepoProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.NodeCjsProject.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.NodeCjsProjectOptions">NodeCjsProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.NodeCjsProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#wingen.NodeCjsProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#wingen.NodeCjsProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#wingen.NodeCjsProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#wingen.NodeCjsProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#wingen.NodeCjsProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#wingen.NodeCjsProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#wingen.NodeCjsProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#wingen.NodeCjsProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#wingen.NodeCjsProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#wingen.NodeCjsProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#wingen.NodeCjsProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#wingen.NodeCjsProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#wingen.NodeCjsProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#wingen.NodeCjsProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#wingen.NodeCjsProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="wingen.NodeCjsProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="wingen.NodeCjsProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="wingen.NodeCjsProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="wingen.NodeCjsProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="wingen.NodeCjsProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="wingen.NodeCjsProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="wingen.NodeCjsProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeCjsProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="wingen.NodeCjsProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="wingen.NodeCjsProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="wingen.NodeCjsProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="wingen.NodeCjsProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="wingen.NodeCjsProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.NodeCjsProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.NodeCjsProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="wingen.NodeCjsProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeCjsProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="wingen.NodeCjsProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="wingen.NodeCjsProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="wingen.NodeCjsProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="wingen.NodeCjsProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeCjsProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="wingen.NodeCjsProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeCjsProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="wingen.NodeCjsProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeCjsProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="wingen.NodeCjsProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeCjsProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="wingen.NodeCjsProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="wingen.NodeCjsProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="wingen.NodeCjsProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="wingen.NodeCjsProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="wingen.NodeCjsProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="wingen.NodeCjsProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="wingen.NodeCjsProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeCjsProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="wingen.NodeCjsProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeCjsProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#wingen.NodeCjsProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#wingen.NodeCjsProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#wingen.NodeCjsProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#wingen.NodeCjsProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#wingen.NodeCjsProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#wingen.NodeCjsProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#wingen.NodeCjsProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#wingen.NodeCjsProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#wingen.NodeCjsProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#wingen.NodeCjsProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#wingen.NodeCjsProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#wingen.NodeCjsProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#wingen.NodeCjsProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#wingen.NodeCjsProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#wingen.NodeCjsProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeCjsProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#wingen.NodeCjsProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#wingen.NodeCjsProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="wingen.NodeCjsProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="wingen.NodeCjsProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="wingen.NodeCjsProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="wingen.NodeCjsProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="wingen.NodeCjsProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="wingen.NodeCjsProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="wingen.NodeCjsProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="wingen.NodeCjsProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="wingen.NodeCjsProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="wingen.NodeCjsProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.NodeCjsProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="wingen.NodeCjsProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="wingen.NodeCjsProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="wingen.NodeCjsProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="wingen.NodeCjsProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="wingen.NodeCjsProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="wingen.NodeCjsProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="wingen.NodeCjsProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="wingen.NodeCjsProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="wingen.NodeCjsProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="wingen.NodeCjsProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="wingen.NodeCjsProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="wingen.NodeCjsProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.NodeCjsProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeCjsProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="wingen.NodeCjsProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NodePackage <a name="NodePackage" id="wingen.NodePackage"></a>

#### Initializers <a name="Initializers" id="wingen.NodePackage.Initializer"></a>

```typescript
import { NodePackage } from 'wingen'

new NodePackage(project: Project, options?: NodePackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodePackage.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#wingen.NodePackage.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.NodePackageOptions">NodePackageOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.NodePackage.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="wingen.NodePackage.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.NodePackageOptions">NodePackageOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.NodePackage.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#wingen.NodePackage.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#wingen.NodePackage.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#wingen.NodePackage.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodePackage.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodePackage.addFields">addFields</a></code> | *No description.* |
| <code><a href="#wingen.NodePackage.setScript">setScript</a></code> | *No description.* |

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.NodePackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.NodePackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="wingen.NodePackage.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addDeps` <a name="addDeps" id="wingen.NodePackage.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="wingen.NodePackage.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="wingen.NodePackage.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="wingen.NodePackage.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="wingen.NodePackage.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="wingen.NodePackage.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `setScript` <a name="setScript" id="wingen.NodePackage.setScript"></a>

```typescript
public setScript(name: string, script: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodePackage.setScript.parameter.name"></a>

- *Type:* string

---

###### `script`<sup>Required</sup> <a name="script" id="wingen.NodePackage.setScript.parameter.script"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodePackage.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.NodePackage.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NodeProject <a name="NodeProject" id="wingen.NodeProject"></a>

#### Initializers <a name="Initializers" id="wingen.NodeProject.Initializer"></a>

```typescript
import { NodeProject } from 'wingen'

new NodeProject(options: NodeProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeProject.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.NodeProjectOptions">NodeProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.NodeProject.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.NodeProjectOptions">NodeProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.NodeProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#wingen.NodeProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#wingen.NodeProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#wingen.NodeProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#wingen.NodeProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#wingen.NodeProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#wingen.NodeProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#wingen.NodeProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#wingen.NodeProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#wingen.NodeProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#wingen.NodeProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#wingen.NodeProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#wingen.NodeProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#wingen.NodeProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#wingen.NodeProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#wingen.NodeProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodeProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#wingen.NodeProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#wingen.NodeProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="wingen.NodeProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="wingen.NodeProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="wingen.NodeProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="wingen.NodeProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="wingen.NodeProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="wingen.NodeProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="wingen.NodeProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="wingen.NodeProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="wingen.NodeProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="wingen.NodeProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="wingen.NodeProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="wingen.NodeProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.NodeProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.NodeProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="wingen.NodeProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="wingen.NodeProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="wingen.NodeProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="wingen.NodeProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="wingen.NodeProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="wingen.NodeProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="wingen.NodeProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="wingen.NodeProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.NodeProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="wingen.NodeProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="wingen.NodeProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="wingen.NodeProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="wingen.NodeProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="wingen.NodeProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="wingen.NodeProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="wingen.NodeProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="wingen.NodeProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="wingen.NodeProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#wingen.NodeProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#wingen.NodeProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#wingen.NodeProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#wingen.NodeProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#wingen.NodeProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#wingen.NodeProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#wingen.NodeProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#wingen.NodeProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#wingen.NodeProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#wingen.NodeProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#wingen.NodeProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#wingen.NodeProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#wingen.NodeProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#wingen.NodeProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#wingen.NodeProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.NodeProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#wingen.NodeProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#wingen.NodeProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="wingen.NodeProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="wingen.NodeProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="wingen.NodeProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="wingen.NodeProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="wingen.NodeProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="wingen.NodeProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="wingen.NodeProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="wingen.NodeProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="wingen.NodeProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="wingen.NodeProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.NodeProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="wingen.NodeProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="wingen.NodeProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="wingen.NodeProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="wingen.NodeProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="wingen.NodeProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="wingen.NodeProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="wingen.NodeProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="wingen.NodeProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="wingen.NodeProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="wingen.NodeProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="wingen.NodeProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="wingen.NodeProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.NodeProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.NodeProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="wingen.NodeProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Project <a name="Project" id="wingen.Project"></a>

Base project.

#### Initializers <a name="Initializers" id="wingen.Project.Initializer"></a>

```typescript
import { Project } from 'wingen'

new Project(options: ProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Project.Initializer.parameter.options">options</a></code> | <code>projen.ProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.Project.Initializer.parameter.options"></a>

- *Type:* projen.ProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.Project.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#wingen.Project.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#wingen.Project.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#wingen.Project.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#wingen.Project.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#wingen.Project.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#wingen.Project.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#wingen.Project.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#wingen.Project.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#wingen.Project.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#wingen.Project.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#wingen.Project.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#wingen.Project.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#wingen.Project.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#wingen.Project.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="wingen.Project.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="wingen.Project.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="wingen.Project.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="wingen.Project.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="wingen.Project.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="wingen.Project.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="wingen.Project.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="wingen.Project.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="wingen.Project.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="wingen.Project.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="wingen.Project.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="wingen.Project.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="wingen.Project.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.Project.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.Project.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="wingen.Project.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="wingen.Project.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="wingen.Project.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="wingen.Project.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="wingen.Project.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="wingen.Project.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.Project.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="wingen.Project.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.Project.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="wingen.Project.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.Project.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="wingen.Project.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.Project.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Project.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#wingen.Project.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#wingen.Project.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#wingen.Project.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#wingen.Project.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#wingen.Project.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#wingen.Project.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#wingen.Project.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#wingen.Project.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#wingen.Project.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#wingen.Project.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#wingen.Project.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#wingen.Project.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#wingen.Project.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#wingen.Project.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#wingen.Project.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.Project.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#wingen.Project.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#wingen.Project.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="wingen.Project.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="wingen.Project.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="wingen.Project.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="wingen.Project.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="wingen.Project.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="wingen.Project.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="wingen.Project.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="wingen.Project.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="wingen.Project.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="wingen.Project.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="wingen.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="wingen.Project.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="wingen.Project.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="wingen.Project.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="wingen.Project.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="wingen.Project.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="wingen.Project.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="wingen.Project.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="wingen.Project.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="wingen.Project.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="wingen.Project.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="wingen.Project.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.Project.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.Project.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="wingen.Project.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### TypescriptConfig <a name="TypescriptConfig" id="wingen.TypescriptConfig"></a>

#### Initializers <a name="Initializers" id="wingen.TypescriptConfig.Initializer"></a>

```typescript
import { TypescriptConfig } from 'wingen'

new TypescriptConfig(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.TypescriptConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.TypescriptConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#wingen.TypescriptConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#wingen.TypescriptConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.TypescriptConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.TypescriptConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="wingen.TypescriptConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="wingen.TypescriptConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypescriptProject <a name="TypescriptProject" id="wingen.TypescriptProject"></a>

#### Initializers <a name="Initializers" id="wingen.TypescriptProject.Initializer"></a>

```typescript
import { TypescriptProject } from 'wingen'

new TypescriptProject(parent: MonorepoProject, options: TypescriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptProject.Initializer.parameter.parent">parent</a></code> | <code><a href="#wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#wingen.TypescriptProjectOptions">TypescriptProjectOptions</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="wingen.TypescriptProject.Initializer.parameter.parent"></a>

- *Type:* <a href="#wingen.MonorepoProject">MonorepoProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="wingen.TypescriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#wingen.TypescriptProjectOptions">TypescriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wingen.TypescriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#wingen.TypescriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#wingen.TypescriptProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#wingen.TypescriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#wingen.TypescriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#wingen.TypescriptProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#wingen.TypescriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#wingen.TypescriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#wingen.TypescriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#wingen.TypescriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#wingen.TypescriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#wingen.TypescriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#wingen.TypescriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#wingen.TypescriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#wingen.TypescriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#wingen.TypescriptProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="wingen.TypescriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="wingen.TypescriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="wingen.TypescriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="wingen.TypescriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="wingen.TypescriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="wingen.TypescriptProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="wingen.TypescriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="wingen.TypescriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="wingen.TypescriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="wingen.TypescriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="wingen.TypescriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="wingen.TypescriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="wingen.TypescriptProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="wingen.TypescriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="wingen.TypescriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="wingen.TypescriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="wingen.TypescriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="wingen.TypescriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="wingen.TypescriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="wingen.TypescriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="wingen.TypescriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.TypescriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="wingen.TypescriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.TypescriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="wingen.TypescriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.TypescriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="wingen.TypescriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wingen.TypescriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="wingen.TypescriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="wingen.TypescriptProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="wingen.TypescriptProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="wingen.TypescriptProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="wingen.TypescriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="wingen.TypescriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="wingen.TypescriptProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="wingen.TypescriptProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="wingen.TypescriptProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#wingen.TypescriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#wingen.TypescriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#wingen.TypescriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#wingen.TypescriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#wingen.TypescriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#wingen.TypescriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#wingen.TypescriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#wingen.TypescriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#wingen.TypescriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#wingen.TypescriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#wingen.TypescriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#wingen.TypescriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#wingen.TypescriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#wingen.TypescriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#wingen.TypescriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#wingen.TypescriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#wingen.TypescriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#wingen.TypescriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="wingen.TypescriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="wingen.TypescriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="wingen.TypescriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="wingen.TypescriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="wingen.TypescriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="wingen.TypescriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="wingen.TypescriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="wingen.TypescriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="wingen.TypescriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="wingen.TypescriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="wingen.TypescriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="wingen.TypescriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="wingen.TypescriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="wingen.TypescriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="wingen.TypescriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="wingen.TypescriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="wingen.TypescriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="wingen.TypescriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="wingen.TypescriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="wingen.TypescriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="wingen.TypescriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="wingen.TypescriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="wingen.TypescriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="wingen.TypescriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wingen.TypescriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="wingen.TypescriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


