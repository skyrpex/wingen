# replace this
# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### EslintOptions <a name="EslintOptions" id="@skyrpex/wingen.EslintOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.EslintOptions.Initializer"></a>

```typescript
import { EslintOptions } from '@skyrpex/wingen'

const eslintOptions: EslintOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.EslintOptions.property.extends">extends</a></code> | <code>string[]</code> | *No description.* |

---

##### `extends`<sup>Required</sup> <a name="extends" id="@skyrpex/wingen.EslintOptions.property.extends"></a>

```typescript
public readonly extends: string[];
```

- *Type:* string[]

---

### MonorepoProjectOptions <a name="MonorepoProjectOptions" id="@skyrpex/wingen.MonorepoProjectOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.MonorepoProjectOptions.Initializer"></a>

```typescript
import { MonorepoProjectOptions } from '@skyrpex/wingen'

const monorepoProjectOptions: MonorepoProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.MonorepoProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@skyrpex/wingen.MonorepoProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.MonorepoProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.MonorepoProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

### NodeCjsProjectOptions <a name="NodeCjsProjectOptions" id="@skyrpex/wingen.NodeCjsProjectOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.NodeCjsProjectOptions.Initializer"></a>

```typescript
import { NodeCjsProjectOptions } from '@skyrpex/wingen'

const nodeCjsProjectOptions: NodeCjsProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodeCjsProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.NodeCjsProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.NodeCjsProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.NodeCjsProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

---

### NodePackageOptions <a name="NodePackageOptions" id="@skyrpex/wingen.NodePackageOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.NodePackageOptions.Initializer"></a>

```typescript
import { NodePackageOptions } from '@skyrpex/wingen'

const nodePackageOptions: NodePackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | *No description.* |

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodePackageOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.NodePackageOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@skyrpex/wingen.NodePackageOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

---

### NodeProjectOptions <a name="NodeProjectOptions" id="@skyrpex/wingen.NodeProjectOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.NodeProjectOptions.Initializer"></a>

```typescript
import { NodeProjectOptions } from '@skyrpex/wingen'

const nodeProjectOptions: NodeProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodeProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.NodeProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.NodeProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.NodeProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@skyrpex/wingen.NodeProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

---

### TypescriptProjectOptions <a name="TypescriptProjectOptions" id="@skyrpex/wingen.TypescriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.TypescriptProjectOptions.Initializer"></a>

```typescript
import { TypescriptProjectOptions } from '@skyrpex/wingen'

const typescriptProjectOptions: TypescriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.eslint">eslint</a></code> | <code><a href="#@skyrpex/wingen.EslintOptions">EslintOptions</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.TypescriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.TypescriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@skyrpex/wingen.TypescriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: EslintOptions;
```

- *Type:* <a href="#@skyrpex/wingen.EslintOptions">EslintOptions</a>

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.TypescriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.TypescriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

---

## Classes <a name="Classes" id="Classes"></a>

### Editorconfig <a name="Editorconfig" id="@skyrpex/wingen.Editorconfig"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Editorconfig.Initializer"></a>

```typescript
import { Editorconfig } from '@skyrpex/wingen'

new Editorconfig(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Editorconfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Editorconfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Editorconfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.Editorconfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.Editorconfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Editorconfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Editorconfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.Editorconfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Editorconfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Editorconfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Eslint <a name="Eslint" id="@skyrpex/wingen.Eslint"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Eslint.Initializer"></a>

```typescript
import { Eslint } from '@skyrpex/wingen'

new Eslint(project: NodeProject, options: EslintOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Eslint.Initializer.parameter.project">project</a></code> | <code><a href="#@skyrpex/wingen.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Eslint.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.EslintOptions">EslintOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Eslint.Initializer.parameter.project"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeProject">NodeProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.Eslint.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.EslintOptions">EslintOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Eslint.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.Eslint.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.Eslint.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Eslint.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Eslint.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.Eslint.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Eslint.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Eslint.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### MonorepoProject <a name="MonorepoProject" id="@skyrpex/wingen.MonorepoProject"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.MonorepoProject.Initializer"></a>

```typescript
import { MonorepoProject } from '@skyrpex/wingen'

new MonorepoProject(options: MonorepoProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.MonorepoProject.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.MonorepoProjectOptions">MonorepoProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.MonorepoProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.MonorepoProjectOptions">MonorepoProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.MonorepoProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.MonorepoProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.MonorepoProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.MonorepoProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.MonorepoProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.MonorepoProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.MonorepoProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.MonorepoProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.MonorepoProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.MonorepoProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.MonorepoProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.MonorepoProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.MonorepoProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.MonorepoProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.MonorepoProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.MonorepoProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.MonorepoProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.MonorepoProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.MonorepoProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.MonorepoProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.MonorepoProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.MonorepoProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.MonorepoProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.MonorepoProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.MonorepoProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.MonorepoProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.MonorepoProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.MonorepoProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.MonorepoProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.MonorepoProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.MonorepoProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.MonorepoProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.MonorepoProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="@skyrpex/wingen.MonorepoProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="@skyrpex/wingen.MonorepoProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.MonorepoProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.MonorepoProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.MonorepoProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.MonorepoProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.MonorepoProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.MonorepoProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.MonorepoProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.MonorepoProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.MonorepoProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.MonorepoProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.MonorepoProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.MonorepoProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.MonorepoProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.MonorepoProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.MonorepoProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.MonorepoProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.MonorepoProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.MonorepoProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.MonorepoProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.MonorepoProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.MonorepoProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.MonorepoProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.MonorepoProject.property.parent"></a>

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
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.MonorepoProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NodeCjsProject <a name="NodeCjsProject" id="@skyrpex/wingen.NodeCjsProject"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.NodeCjsProject.Initializer"></a>

```typescript
import { NodeCjsProject } from '@skyrpex/wingen'

new NodeCjsProject(options: NodeCjsProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions">NodeCjsProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.NodeCjsProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeCjsProjectOptions">NodeCjsProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.NodeCjsProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.NodeCjsProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.NodeCjsProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.NodeCjsProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.NodeCjsProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.NodeCjsProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.NodeCjsProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.NodeCjsProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.NodeCjsProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.NodeCjsProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.NodeCjsProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.NodeCjsProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.NodeCjsProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.NodeCjsProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.NodeCjsProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.NodeCjsProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.NodeCjsProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.NodeCjsProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.NodeCjsProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeCjsProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.NodeCjsProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeCjsProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.NodeCjsProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeCjsProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.NodeCjsProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeCjsProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.NodeCjsProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeCjsProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.NodeCjsProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.NodeCjsProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.NodeCjsProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.NodeCjsProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="@skyrpex/wingen.NodeCjsProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="@skyrpex/wingen.NodeCjsProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.NodeCjsProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.NodeCjsProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.NodeCjsProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.NodeCjsProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeCjsProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.NodeCjsProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.NodeCjsProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.NodeCjsProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.NodeCjsProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.NodeCjsProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.NodeCjsProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.NodeCjsProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.NodeCjsProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.NodeCjsProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.NodeCjsProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.NodeCjsProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.NodeCjsProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.NodeCjsProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.NodeCjsProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.NodeCjsProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.NodeCjsProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.NodeCjsProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.NodeCjsProject.property.parent"></a>

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
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.NodeCjsProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### NodePackage <a name="NodePackage" id="@skyrpex/wingen.NodePackage"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.NodePackage.Initializer"></a>

```typescript
import { NodePackage } from '@skyrpex/wingen'

new NodePackage(project: Project, options?: NodePackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodePackage.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackage.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.NodePackageOptions">NodePackageOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.NodePackage.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@skyrpex/wingen.NodePackage.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.NodePackageOptions">NodePackageOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.NodePackage.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.NodePackage.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.NodePackage.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@skyrpex/wingen.NodePackage.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackage.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackage.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackage.setScript">setScript</a></code> | *No description.* |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.NodePackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.NodePackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.NodePackage.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.NodePackage.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodePackage.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.NodePackage.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.NodePackage.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.NodePackage.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.NodePackage.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `setScript` <a name="setScript" id="@skyrpex/wingen.NodePackage.setScript"></a>

```typescript
public setScript(name: string, script: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodePackage.setScript.parameter.name"></a>

- *Type:* string

---

###### `script`<sup>Required</sup> <a name="script" id="@skyrpex/wingen.NodePackage.setScript.parameter.script"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodePackage.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.NodePackage.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### NodeProject <a name="NodeProject" id="@skyrpex/wingen.NodeProject"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.NodeProject.Initializer"></a>

```typescript
import { NodeProject } from '@skyrpex/wingen'

new NodeProject(options: NodeProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeProject.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.NodeProjectOptions">NodeProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.NodeProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeProjectOptions">NodeProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.NodeProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.NodeProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.NodeProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.NodeProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.NodeProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.NodeProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.NodeProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.NodeProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.NodeProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.NodeProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.NodeProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.NodeProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.NodeProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@skyrpex/wingen.NodeProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.NodeProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.NodeProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.NodeProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.NodeProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.NodeProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.NodeProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.NodeProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.NodeProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.NodeProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.NodeProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.NodeProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.NodeProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.NodeProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.NodeProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.NodeProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.NodeProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.NodeProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.NodeProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.NodeProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.NodeProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.NodeProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.NodeProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.NodeProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.NodeProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.NodeProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.NodeProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.NodeProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="@skyrpex/wingen.NodeProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="@skyrpex/wingen.NodeProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.NodeProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.NodeProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.NodeProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.NodeProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.NodeProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.NodeProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.NodeProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.NodeProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.NodeProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.NodeProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.NodeProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.NodeProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.NodeProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.NodeProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.NodeProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.NodeProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.NodeProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.NodeProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.NodeProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.NodeProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.NodeProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.NodeProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.NodeProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.NodeProject.property.parent"></a>

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
| <code><a href="#@skyrpex/wingen.NodeProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.NodeProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Project <a name="Project" id="@skyrpex/wingen.Project"></a>

Base project.

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Project.Initializer"></a>

```typescript
import { Project } from '@skyrpex/wingen'

new Project(options: ProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Project.Initializer.parameter.options">options</a></code> | <code>projen.ProjectOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.Project.Initializer.parameter.options"></a>

- *Type:* projen.ProjectOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Project.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.Project.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.Project.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.Project.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.Project.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.Project.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.Project.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.Project.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.Project.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.Project.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.Project.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.Project.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.Project.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.Project.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.Project.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.Project.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.Project.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.Project.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.Project.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.Project.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.Project.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.Project.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.Project.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.Project.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.Project.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.Project.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.Project.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.Project.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Project.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Project.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.Project.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.Project.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.Project.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.Project.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.Project.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.Project.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.Project.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.Project.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.Project.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.Project.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.Project.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.Project.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.Project.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Project.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.Project.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.Project.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.Project.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.Project.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.Project.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.Project.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.Project.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.Project.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.Project.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.Project.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.Project.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.Project.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.Project.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.Project.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.Project.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Project.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.Project.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.Project.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.Project.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.Project.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.Project.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.Project.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.Project.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.Project.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.Project.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.Project.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.Project.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.Project.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.Project.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.Project.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.Project.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.Project.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.Project.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.Project.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.Project.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.Project.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.Project.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.Project.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.Project.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.Project.property.parent"></a>

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
| <code><a href="#@skyrpex/wingen.Project.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.Project.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### TypescriptConfig <a name="TypescriptConfig" id="@skyrpex/wingen.TypescriptConfig"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.TypescriptConfig.Initializer"></a>

```typescript
import { TypescriptConfig } from '@skyrpex/wingen'

new TypescriptConfig(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.TypescriptConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.TypescriptConfig.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.TypescriptConfig.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.TypescriptConfig.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.TypescriptConfig.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypescriptProject <a name="TypescriptProject" id="@skyrpex/wingen.TypescriptProject"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.TypescriptProject.Initializer"></a>

```typescript
import { TypescriptProject } from '@skyrpex/wingen'

new TypescriptProject(options: TypescriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.TypescriptProjectOptions">TypescriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.TypescriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.TypescriptProjectOptions">TypescriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.TypescriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.TypescriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.TypescriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.TypescriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.TypescriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.TypescriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.TypescriptProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.TypescriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.TypescriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.TypescriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.TypescriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.TypescriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.TypescriptProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.TypescriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.TypescriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.TypescriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.TypescriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.TypescriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.TypescriptProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.TypescriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.TypescriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.TypescriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.TypescriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.TypescriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.TypescriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.TypescriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.TypescriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.TypescriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.TypescriptProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.TypescriptProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.TypescriptProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.TypescriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.TypescriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="@skyrpex/wingen.TypescriptProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="@skyrpex/wingen.TypescriptProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.TypescriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.TypescriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.TypescriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.TypescriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.TypescriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.TypescriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.TypescriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.TypescriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.TypescriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.TypescriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.TypescriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.TypescriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.TypescriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.TypescriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.TypescriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.TypescriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.TypescriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.TypescriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.TypescriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.TypescriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.TypescriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.TypescriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.TypescriptProject.property.parent"></a>

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
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.TypescriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


