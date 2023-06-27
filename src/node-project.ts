// import { License } from "projen";

import { Project, ProjectOptions } from "./project";

export interface NodeProjectOptions extends ProjectOptions {}

export class NodeProject extends Project {
  constructor(options: NodeProjectOptions) {
    super(options);

    // this.addFields({
    //   license: "MIT",
    // });
    // new License(this, {
    //   spdx: "MIT",
    //   copyrightOwner: "Monada",
    //   copyrightPeriod: "2023-current",
    // });
  }
}
