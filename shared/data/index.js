export { meta as riscosMeta } from "./riscos.js";
export { meta as canvasMeta } from "./canvas.js";
export { meta as mvpMeta } from "./mvp.js";
export { meta as roadmapMeta } from "./roadmap.js";
export { meta as cicloMeta } from "./ciclo.js";
export { meta as iaMeta } from "./ia.js";

import { meta as riscosMeta } from "./riscos.js";
import { meta as canvasMeta } from "./canvas.js";
import { meta as mvpMeta } from "./mvp.js";
import { meta as roadmapMeta } from "./roadmap.js";
import { meta as cicloMeta } from "./ciclo.js";
import { meta as iaMeta } from "./ia.js";

export const registry = {
  riscos: riscosMeta,
  canvas: canvasMeta,
  mvp: mvpMeta,
  roadmap: roadmapMeta,
  ciclo: cicloMeta,
  ia: iaMeta,
};
