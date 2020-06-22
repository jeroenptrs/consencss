import * as cache from "./cache";
import { ClassStylePair } from "./types";

const sheet =
  typeof document !== "undefined"
    ? document.head.appendChild(document.createElement("style")).sheet
    : undefined;

export const add = (rule: string) => sheet?.insertRule(rule, sheet?.cssRules.length);

export function addToCacheAndSheet(pair: ClassStylePair) {
  const [c, s] = pair;
  if (!cache.has(c)) {
    cache.add(c);
    add(s);
  }
}
