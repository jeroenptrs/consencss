import { isSimplePseudo, simplePseudos, SimplePseudos } from "@consencss/util";

import { addToCacheAndSheet } from "./sheet";
import { CSSClass, PropKey, PropValue, ClassStylePair } from "./types";

export function rule<T extends PropKey>(prop: T, value: PropValue<T>): CSSClass;
export function rule<T extends PropKey>(
  prop: T,
  value: PropValue<T>,
  pseudo: SimplePseudos
): CSSClass;
export function rule<T extends PropKey>(
  prop: T,
  value: PropValue<T>,
  pseudo?: SimplePseudos
): CSSClass {
  const pair = createRule(prop, value, pseudo as any);
  addToCacheAndSheet(pair);
  return pair[0];
}

export function createRule<T extends PropKey>(prop: T, value: PropValue<T>): ClassStylePair;
export function createRule<T extends PropKey>(
  prop: T,
  value: PropValue<T>,
  pseudo: SimplePseudos
): ClassStylePair;
export function createRule<T extends PropKey>(
  prop: T,
  value: PropValue<T>,
  pseudo?: SimplePseudos
): ClassStylePair {
  // TODO: sanitize values for className
  // TODO: create value() util for stuff like border
  const className = `${
    isSimplePseudo(pseudo) ? `${simplePseudos[pseudo]}-` : ""
  }${prop}-${value}` as CSSClass;
  const style = `.${className}${isSimplePseudo(pseudo) ? pseudo : ""}{${prop}:${value};}`;
  return [className, style];
}
