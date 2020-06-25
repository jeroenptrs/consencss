import { createOverride } from "override-clsx";

import { CSSClass } from "@consencss/util";

export const classNames = createOverride<CSSClass>();

export { rule } from "./rule";
