import { createOverride } from "override-clsx";

import { CSSClass } from "./types";

export const classNames = createOverride<CSSClass>();

export { rule } from "./rule";
