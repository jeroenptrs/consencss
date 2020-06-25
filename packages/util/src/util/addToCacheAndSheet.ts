import * as cache from "../cache";
import * as sheet from "../sheet";

import { ClassStylePair } from "../types";

export function addToCacheAndSheet(pair: ClassStylePair) {
  const [c, s] = pair;
  if (!cache.has(c)) {
    cache.add(c);
    sheet.add(s);
  }
}
