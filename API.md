# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

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
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.license">license</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.MonorepoProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.MonorepoProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.MonorepoProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.MonorepoProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@skyrpex/wingen.MonorepoProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@skyrpex/wingen.MonorepoProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
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

##### `license`<sup>Optional</sup> <a name="license" id="@skyrpex/wingen.MonorepoProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

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
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.monorepo">monorepo</a></code> | <code><a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Email of the library author. |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Whether the author is an organization. |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | *No description.* |

---

##### `monorepo`<sup>Required</sup> <a name="monorepo" id="@skyrpex/wingen.NodeCjsProjectOptions.property.monorepo"></a>

```typescript
public readonly monorepo: MonorepoProject;
```

- *Type:* <a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeCjsProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.NodeCjsProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.NodeCjsProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email of the library author.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.NodeCjsProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Whether the author is an organization.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@skyrpex/wingen.NodeCjsProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@skyrpex/wingen.NodeCjsProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodeCjsProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@skyrpex/wingen.NodeCjsProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

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

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@skyrpex/wingen.NodeCjsProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]

---

### NodeEsmProjectOptions <a name="NodeEsmProjectOptions" id="@skyrpex/wingen.NodeEsmProjectOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.NodeEsmProjectOptions.Initializer"></a>

```typescript
import { NodeEsmProjectOptions } from '@skyrpex/wingen'

const nodeEsmProjectOptions: NodeEsmProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.monorepo">monorepo</a></code> | <code><a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Email of the library author. |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Whether the author is an organization. |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | *No description.* |

---

##### `monorepo`<sup>Required</sup> <a name="monorepo" id="@skyrpex/wingen.NodeEsmProjectOptions.property.monorepo"></a>

```typescript
public readonly monorepo: MonorepoProject;
```

- *Type:* <a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeEsmProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.NodeEsmProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.NodeEsmProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email of the library author.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.NodeEsmProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Whether the author is an organization.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@skyrpex/wingen.NodeEsmProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@skyrpex/wingen.NodeEsmProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodeEsmProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@skyrpex/wingen.NodeEsmProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.NodeEsmProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.NodeEsmProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@skyrpex/wingen.NodeEsmProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]

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
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodePackageOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | *No description.* |

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@skyrpex/wingen.NodePackageOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@skyrpex/wingen.NodePackageOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

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

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@skyrpex/wingen.NodePackageOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]

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
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.parent">parent</a></code> | <code><a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Email of the library author. |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Whether the author is an organization. |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.exports">exports</a></code> | <code>string \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.files">files</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@skyrpex/wingen.NodeProjectOptions.property.parent"></a>

```typescript
public readonly parent: MonorepoProject;
```

- *Type:* <a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a>

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.NodeProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.NodeProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email of the library author.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.NodeProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Whether the author is an organization.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@skyrpex/wingen.NodeProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@skyrpex/wingen.NodeProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.NodeProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@skyrpex/wingen.NodeProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.NodeProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `exports`<sup>Optional</sup> <a name="exports" id="@skyrpex/wingen.NodeProjectOptions.property.exports"></a>

```typescript
public readonly exports: string | {[ key: string ]: string};
```

- *Type:* string | {[ key: string ]: string}

---

##### `files`<sup>Optional</sup> <a name="files" id="@skyrpex/wingen.NodeProjectOptions.property.files"></a>

```typescript
public readonly files: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.NodeProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@skyrpex/wingen.NodeProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@skyrpex/wingen.NodeProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

---

### TsupOptions <a name="TsupOptions" id="@skyrpex/wingen.TsupOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.TsupOptions.Initializer"></a>

```typescript
import { TsupOptions } from '@skyrpex/wingen'

const tsupOptions: TsupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.bundle">bundle</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.clean">clean</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.dts">dts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.entry">entry</a></code> | <code>string \| string[] \| {[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.format">format</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.outDir">outDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TsupOptions.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@skyrpex/wingen.TsupOptions.property.bundle"></a>

```typescript
public readonly bundle: boolean;
```

- *Type:* boolean

---

##### `clean`<sup>Required</sup> <a name="clean" id="@skyrpex/wingen.TsupOptions.property.clean"></a>

```typescript
public readonly clean: boolean;
```

- *Type:* boolean

---

##### `dts`<sup>Required</sup> <a name="dts" id="@skyrpex/wingen.TsupOptions.property.dts"></a>

```typescript
public readonly dts: boolean;
```

- *Type:* boolean

---

##### `entry`<sup>Required</sup> <a name="entry" id="@skyrpex/wingen.TsupOptions.property.entry"></a>

```typescript
public readonly entry: string | string[] | {[ key: string ]: string};
```

- *Type:* string | string[] | {[ key: string ]: string}

---

##### `format`<sup>Required</sup> <a name="format" id="@skyrpex/wingen.TsupOptions.property.format"></a>

```typescript
public readonly format: string[];
```

- *Type:* string[]

---

##### `outDir`<sup>Required</sup> <a name="outDir" id="@skyrpex/wingen.TsupOptions.property.outDir"></a>

```typescript
public readonly outDir: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@skyrpex/wingen.TsupOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

### TurboProps <a name="TurboProps" id="@skyrpex/wingen.TurboProps"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.TurboProps.Initializer"></a>

```typescript
import { TurboProps } from '@skyrpex/wingen'

const turboProps: TurboProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TurboProps.property.globalEnv">globalEnv</a></code> | <code>string[]</code> | A list of environment variables for implicit global hash dependencies. |
| <code><a href="#@skyrpex/wingen.TurboProps.property.pipeline">pipeline</a></code> | <code>{[ key: string ]: <a href="#@skyrpex/wingen.TurboWorkspaceProps">TurboWorkspaceProps</a>}</code> | An object representing the task dependency graph of your project. |

---

##### `globalEnv`<sup>Optional</sup> <a name="globalEnv" id="@skyrpex/wingen.TurboProps.property.globalEnv"></a>

```typescript
public readonly globalEnv: string[];
```

- *Type:* string[]

A list of environment variables for implicit global hash dependencies.

The variables included in this list will affect all task hashes.

Documentation: https://turbo.build/repo/docs/reference/configuration#globalenv

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@skyrpex/wingen.TurboProps.property.pipeline"></a>

```typescript
public readonly pipeline: {[ key: string ]: TurboWorkspaceProps};
```

- *Type:* {[ key: string ]: <a href="#@skyrpex/wingen.TurboWorkspaceProps">TurboWorkspaceProps</a>}

An object representing the task dependency graph of your project.

turbo interprets these conventions to schedule, execute, and cache the outputs of tasks in your project.

Documentation: https://turbo.build/repo/docs/reference/configuration#pipeline

---

### TurboWorkspaceProps <a name="TurboWorkspaceProps" id="@skyrpex/wingen.TurboWorkspaceProps"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.TurboWorkspaceProps.Initializer"></a>

```typescript
import { TurboWorkspaceProps } from '@skyrpex/wingen'

const turboWorkspaceProps: TurboWorkspaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.cache">cache</a></code> | <code>boolean</code> | Whether or not to cache the outputs of the task. |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | The list of tasks that this task depends on. |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.env">env</a></code> | <code>string[]</code> | A list of environment variables that this task depends on. |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.inputs">inputs</a></code> | <code>string[]</code> | The set of glob patterns to consider as inputs to this task. |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.outputs">outputs</a></code> | <code>string[]</code> | The set of glob patterns indicating a task's cacheable filesystem outputs. |
| <code><a href="#@skyrpex/wingen.TurboWorkspaceProps.property.persistent">persistent</a></code> | <code>boolean</code> | Indicates whether the task exits or not. |

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@skyrpex/wingen.TurboWorkspaceProps.property.cache"></a>

```typescript
public readonly cache: boolean;
```

- *Type:* boolean

Whether or not to cache the outputs of the task.

Setting cache to false is useful for long-running "watch" or development mode tasks.

Documentation: https://turbo.build/repo/docs/reference/configuration#cache

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@skyrpex/wingen.TurboWorkspaceProps.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

The list of tasks that this task depends on.

Prefixing an item in dependsOn with a ^ prefix tells turbo that this task depends on the package's topological dependencies completing the task first. (e.g. "A package's build tasks should only run once all of its workspace dependencies have completed their own build commands.")

Items in dependsOn without a ^ prefix express the relationships between tasks within the same package (e.g. "A package's test and lint commands depend on its own build being completed first.")

Documentation: https://turbo.build/repo/docs/reference/configuration#dependson

---

##### `env`<sup>Optional</sup> <a name="env" id="@skyrpex/wingen.TurboWorkspaceProps.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

A list of environment variables that this task depends on.

Documentation: https://turbo.build/repo/docs/reference/configuration#env

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@skyrpex/wingen.TurboWorkspaceProps.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

The set of glob patterns to consider as inputs to this task.

Changes to files covered by these globs will cause a cache miss and the task will be rerun.

If a file has been changed that is **not** included in the set of globs, it will not cause a cache miss.

If omitted or empty, all files in the package are considered as inputs.

Documentation: https://turbo.build/repo/docs/reference/configuration#inputs

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@skyrpex/wingen.TurboWorkspaceProps.property.outputs"></a>

```typescript
public readonly outputs: string[];
```

- *Type:* string[]

The set of glob patterns indicating a task's cacheable filesystem outputs.

Turborepo captures task logs for all tasks. This enables us to cache tasks whose runs produce no artifacts other than logs (such as linters). Logs are always treated as a cacheable artifact and never need to be specified.

Documentation: https://turbo.build/repo/docs/reference/configuration#outputs

---

##### `persistent`<sup>Optional</sup> <a name="persistent" id="@skyrpex/wingen.TurboWorkspaceProps.property.persistent"></a>

```typescript
public readonly persistent: boolean;
```

- *Type:* boolean

Indicates whether the task exits or not.

Setting `persistent` to `true` tells turbo that this is a long-running task and will ensure that other tasks cannot depend on it.

Documentation: https://turbo.build/repo/docs/reference/configuration#persistent

---

### TypescriptConfigOptions <a name="TypescriptConfigOptions" id="@skyrpex/wingen.TypescriptConfigOptions"></a>

#### Initializer <a name="Initializer" id="@skyrpex/wingen.TypescriptConfigOptions.Initializer"></a>

```typescript
import { TypescriptConfigOptions } from '@skyrpex/wingen'

const typescriptConfigOptions: TypescriptConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptConfigOptions.property.include">include</a></code> | <code>string[]</code> | *No description.* |

---

##### `include`<sup>Optional</sup> <a name="include" id="@skyrpex/wingen.TypescriptConfigOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

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
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.monorepo">monorepo</a></code> | <code><a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Email of the library author. |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Whether the author is an organization. |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProjectOptions.property.tsup">tsup</a></code> | <code><a href="#@skyrpex/wingen.TsupOptions">TsupOptions</a></code> | *No description.* |

---

##### `monorepo`<sup>Required</sup> <a name="monorepo" id="@skyrpex/wingen.TypescriptProjectOptions.property.monorepo"></a>

```typescript
public readonly monorepo: MonorepoProject;
```

- *Type:* <a href="#@skyrpex/wingen.MonorepoProject">MonorepoProject</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.TypescriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.TypescriptProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.TypescriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email of the library author.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.TypescriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Whether the author is an organization.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@skyrpex/wingen.TypescriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@skyrpex/wingen.TypescriptProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@skyrpex/wingen.TypescriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@skyrpex/wingen.TypescriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@skyrpex/wingen.TypescriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@skyrpex/wingen.TypescriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@skyrpex/wingen.TypescriptProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]

---

##### `tsup`<sup>Optional</sup> <a name="tsup" id="@skyrpex/wingen.TypescriptProjectOptions.property.tsup"></a>

```typescript
public readonly tsup: TsupOptions;
```

- *Type:* <a href="#@skyrpex/wingen.TsupOptions">TsupOptions</a>

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

new Eslint(project: NodeProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Eslint.Initializer.parameter.project">project</a></code> | <code><a href="#@skyrpex/wingen.NodeProject">NodeProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Eslint.Initializer.parameter.project"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeProject">NodeProject</a>

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
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.devTask">devTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.lintTask">lintTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.postInstallTask">postInstallTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.authorEmail">authorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.MonorepoProject.property.license">license</a></code> | <code>string</code> | *No description.* |

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

##### `devTask`<sup>Required</sup> <a name="devTask" id="@skyrpex/wingen.MonorepoProject.property.devTask"></a>

```typescript
public readonly devTask: Task;
```

- *Type:* projen.Task

---

##### `lintTask`<sup>Required</sup> <a name="lintTask" id="@skyrpex/wingen.MonorepoProject.property.lintTask"></a>

```typescript
public readonly lintTask: Task;
```

- *Type:* projen.Task

---

##### `postInstallTask`<sup>Required</sup> <a name="postInstallTask" id="@skyrpex/wingen.MonorepoProject.property.postInstallTask"></a>

```typescript
public readonly postInstallTask: Task;
```

- *Type:* projen.Task

---

##### `author`<sup>Optional</sup> <a name="author" id="@skyrpex/wingen.MonorepoProject.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@skyrpex/wingen.MonorepoProject.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@skyrpex/wingen.MonorepoProject.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@skyrpex/wingen.MonorepoProject.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@skyrpex/wingen.MonorepoProject.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string

---

##### `license`<sup>Optional</sup> <a name="license" id="@skyrpex/wingen.MonorepoProject.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

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
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.devTask">devTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.lintTask">lintTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeCjsProject.property.postInstallTask">postInstallTask</a></code> | <code>projen.Task</code> | *No description.* |

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

##### `devTask`<sup>Required</sup> <a name="devTask" id="@skyrpex/wingen.NodeCjsProject.property.devTask"></a>

```typescript
public readonly devTask: Task;
```

- *Type:* projen.Task

---

##### `lintTask`<sup>Required</sup> <a name="lintTask" id="@skyrpex/wingen.NodeCjsProject.property.lintTask"></a>

```typescript
public readonly lintTask: Task;
```

- *Type:* projen.Task

---

##### `postInstallTask`<sup>Required</sup> <a name="postInstallTask" id="@skyrpex/wingen.NodeCjsProject.property.postInstallTask"></a>

```typescript
public readonly postInstallTask: Task;
```

- *Type:* projen.Task

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

### NodeEsmProject <a name="NodeEsmProject" id="@skyrpex/wingen.NodeEsmProject"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.NodeEsmProject.Initializer"></a>

```typescript
import { NodeEsmProject } from '@skyrpex/wingen'

new NodeEsmProject(options: NodeEsmProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.NodeEsmProjectOptions">NodeEsmProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@skyrpex/wingen.NodeEsmProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeEsmProjectOptions">NodeEsmProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addDeps">addDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addDevDeps">addDevDeps</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addFields">addFields</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.addScript">addScript</a></code> | *No description.* |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@skyrpex/wingen.NodeEsmProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@skyrpex/wingen.NodeEsmProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@skyrpex/wingen.NodeEsmProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@skyrpex/wingen.NodeEsmProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@skyrpex/wingen.NodeEsmProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@skyrpex/wingen.NodeEsmProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@skyrpex/wingen.NodeEsmProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeEsmProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.NodeEsmProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@skyrpex/wingen.NodeEsmProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@skyrpex/wingen.NodeEsmProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@skyrpex/wingen.NodeEsmProject.annotateGenerated"></a>

```typescript
public annotateGenerated(_glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `_glob`<sup>Required</sup> <a name="_glob" id="@skyrpex/wingen.NodeEsmProject.annotateGenerated.parameter._glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.NodeEsmProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.NodeEsmProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@skyrpex/wingen.NodeEsmProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeEsmProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@skyrpex/wingen.NodeEsmProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@skyrpex/wingen.NodeEsmProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@skyrpex/wingen.NodeEsmProject.synth"></a>

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

##### `tryFindFile` <a name="tryFindFile" id="@skyrpex/wingen.NodeEsmProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeEsmProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@skyrpex/wingen.NodeEsmProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeEsmProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@skyrpex/wingen.NodeEsmProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeEsmProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@skyrpex/wingen.NodeEsmProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@skyrpex/wingen.NodeEsmProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDeps` <a name="addDeps" id="@skyrpex/wingen.NodeEsmProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

###### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeEsmProject.addDeps.parameter.deps"></a>

- *Type:* string

---

##### `addDevDeps` <a name="addDevDeps" id="@skyrpex/wingen.NodeEsmProject.addDevDeps"></a>

```typescript
public addDevDeps(devDeps: string): void
```

###### `devDeps`<sup>Required</sup> <a name="devDeps" id="@skyrpex/wingen.NodeEsmProject.addDevDeps.parameter.devDeps"></a>

- *Type:* string

---

##### `addFields` <a name="addFields" id="@skyrpex/wingen.NodeEsmProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

###### `fields`<sup>Required</sup> <a name="fields" id="@skyrpex/wingen.NodeEsmProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

---

##### `addScript` <a name="addScript" id="@skyrpex/wingen.NodeEsmProject.addScript"></a>

```typescript
public addScript(name: string, command: string): void
```

###### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeEsmProject.addScript.parameter.name"></a>

- *Type:* string

---

###### `command`<sup>Required</sup> <a name="command" id="@skyrpex/wingen.NodeEsmProject.addScript.parameter.command"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.devTask">devTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.lintTask">lintTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.postInstallTask">postInstallTask</a></code> | <code>projen.Task</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@skyrpex/wingen.NodeEsmProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@skyrpex/wingen.NodeEsmProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@skyrpex/wingen.NodeEsmProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@skyrpex/wingen.NodeEsmProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@skyrpex/wingen.NodeEsmProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@skyrpex/wingen.NodeEsmProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@skyrpex/wingen.NodeEsmProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@skyrpex/wingen.NodeEsmProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@skyrpex/wingen.NodeEsmProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@skyrpex/wingen.NodeEsmProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@skyrpex/wingen.NodeEsmProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@skyrpex/wingen.NodeEsmProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@skyrpex/wingen.NodeEsmProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@skyrpex/wingen.NodeEsmProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@skyrpex/wingen.NodeEsmProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@skyrpex/wingen.NodeEsmProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@skyrpex/wingen.NodeEsmProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@skyrpex/wingen.NodeEsmProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@skyrpex/wingen.NodeEsmProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@skyrpex/wingen.NodeEsmProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@skyrpex/wingen.NodeEsmProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@skyrpex/wingen.NodeEsmProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@skyrpex/wingen.NodeEsmProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@skyrpex/wingen.NodeEsmProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `devTask`<sup>Required</sup> <a name="devTask" id="@skyrpex/wingen.NodeEsmProject.property.devTask"></a>

```typescript
public readonly devTask: Task;
```

- *Type:* projen.Task

---

##### `lintTask`<sup>Required</sup> <a name="lintTask" id="@skyrpex/wingen.NodeEsmProject.property.lintTask"></a>

```typescript
public readonly lintTask: Task;
```

- *Type:* projen.Task

---

##### `postInstallTask`<sup>Required</sup> <a name="postInstallTask" id="@skyrpex/wingen.NodeEsmProject.property.postInstallTask"></a>

```typescript
public readonly postInstallTask: Task;
```

- *Type:* projen.Task

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.NodeEsmProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@skyrpex/wingen.NodeEsmProject.property.DEFAULT_TASK"></a>

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
| <code><a href="#@skyrpex/wingen.NodeProject.property.devTask">devTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.lintTask">lintTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.NodeProject.property.postInstallTask">postInstallTask</a></code> | <code>projen.Task</code> | *No description.* |

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

##### `devTask`<sup>Required</sup> <a name="devTask" id="@skyrpex/wingen.NodeProject.property.devTask"></a>

```typescript
public readonly devTask: Task;
```

- *Type:* projen.Task

---

##### `lintTask`<sup>Required</sup> <a name="lintTask" id="@skyrpex/wingen.NodeProject.property.lintTask"></a>

```typescript
public readonly lintTask: Task;
```

- *Type:* projen.Task

---

##### `postInstallTask`<sup>Required</sup> <a name="postInstallTask" id="@skyrpex/wingen.NodeProject.property.postInstallTask"></a>

```typescript
public readonly postInstallTask: Task;
```

- *Type:* projen.Task

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

### Tsup <a name="Tsup" id="@skyrpex/wingen.Tsup"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Tsup.Initializer"></a>

```typescript
import { Tsup } from '@skyrpex/wingen'

new Tsup(project: TypescriptProject, options?: TsupOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Tsup.Initializer.parameter.project">project</a></code> | <code><a href="#@skyrpex/wingen.TypescriptProject">TypescriptProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Tsup.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.TsupOptions">TsupOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Tsup.Initializer.parameter.project"></a>

- *Type:* <a href="#@skyrpex/wingen.TypescriptProject">TypescriptProject</a>

---

##### `options`<sup>Optional</sup> <a name="options" id="@skyrpex/wingen.Tsup.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.TsupOptions">TsupOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Tsup.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.Tsup.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.Tsup.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Tsup.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Tsup.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.Tsup.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Tsup.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Tsup.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Turbo <a name="Turbo" id="@skyrpex/wingen.Turbo"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Turbo.Initializer"></a>

```typescript
import { Turbo } from '@skyrpex/wingen'

new Turbo(project: NodeProject, props?: TurboProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Turbo.Initializer.parameter.project">project</a></code> | <code><a href="#@skyrpex/wingen.NodeProject">NodeProject</a></code> | *No description.* |
| <code><a href="#@skyrpex/wingen.Turbo.Initializer.parameter.props">props</a></code> | <code><a href="#@skyrpex/wingen.TurboProps">TurboProps</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Turbo.Initializer.parameter.project"></a>

- *Type:* <a href="#@skyrpex/wingen.NodeProject">NodeProject</a>

---

##### `props`<sup>Optional</sup> <a name="props" id="@skyrpex/wingen.Turbo.Initializer.parameter.props"></a>

- *Type:* <a href="#@skyrpex/wingen.TurboProps">TurboProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Turbo.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.Turbo.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.Turbo.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Turbo.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Turbo.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.Turbo.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Turbo.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Turbo.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypescriptConfig <a name="TypescriptConfig" id="@skyrpex/wingen.TypescriptConfig"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.TypescriptConfig.Initializer"></a>

```typescript
import { TypescriptConfig } from '@skyrpex/wingen'

new TypescriptConfig(project: Project, options?: TypescriptConfigOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptConfig.Initializer.parameter.options">options</a></code> | <code><a href="#@skyrpex/wingen.TypescriptConfigOptions">TypescriptConfigOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.TypescriptConfig.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@skyrpex/wingen.TypescriptConfig.Initializer.parameter.options"></a>

- *Type:* <a href="#@skyrpex/wingen.TypescriptConfigOptions">TypescriptConfigOptions</a>

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
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.devTask">devTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.lintTask">lintTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.postInstallTask">postInstallTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@skyrpex/wingen.TypescriptProject.property.tsConfig">tsConfig</a></code> | <code><a href="#@skyrpex/wingen.TypescriptConfig">TypescriptConfig</a></code> | *No description.* |

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

##### `devTask`<sup>Required</sup> <a name="devTask" id="@skyrpex/wingen.TypescriptProject.property.devTask"></a>

```typescript
public readonly devTask: Task;
```

- *Type:* projen.Task

---

##### `lintTask`<sup>Required</sup> <a name="lintTask" id="@skyrpex/wingen.TypescriptProject.property.lintTask"></a>

```typescript
public readonly lintTask: Task;
```

- *Type:* projen.Task

---

##### `postInstallTask`<sup>Required</sup> <a name="postInstallTask" id="@skyrpex/wingen.TypescriptProject.property.postInstallTask"></a>

```typescript
public readonly postInstallTask: Task;
```

- *Type:* projen.Task

---

##### `tsConfig`<sup>Required</sup> <a name="tsConfig" id="@skyrpex/wingen.TypescriptProject.property.tsConfig"></a>

```typescript
public readonly tsConfig: TypescriptConfig;
```

- *Type:* <a href="#@skyrpex/wingen.TypescriptConfig">TypescriptConfig</a>

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

### Vitest <a name="Vitest" id="@skyrpex/wingen.Vitest"></a>

#### Initializers <a name="Initializers" id="@skyrpex/wingen.Vitest.Initializer"></a>

```typescript
import { Vitest } from '@skyrpex/wingen'

new Vitest(project: TypescriptProject)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Vitest.Initializer.parameter.project">project</a></code> | <code><a href="#@skyrpex/wingen.TypescriptProject">TypescriptProject</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Vitest.Initializer.parameter.project"></a>

- *Type:* <a href="#@skyrpex/wingen.TypescriptProject">TypescriptProject</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skyrpex/wingen.Vitest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@skyrpex/wingen.Vitest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@skyrpex/wingen.Vitest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@skyrpex/wingen.Vitest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@skyrpex/wingen.Vitest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@skyrpex/wingen.Vitest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skyrpex/wingen.Vitest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@skyrpex/wingen.Vitest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---



