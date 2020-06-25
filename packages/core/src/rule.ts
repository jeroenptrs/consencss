import {
  addToCacheAndSheet,
  ClassStylePair,
  CSSClass,
  PropKey,
  PropValue,
  sanitizeValue,
  SimplePseudos,
  withPseudoClassName,
  withPseudoStyle,
} from "@consencss/util";

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
  // TODO: create value() util for stuff like border
  const className = withPseudoClassName(`${prop}-${sanitizeValue(value)}` as CSSClass, pseudo);
  const style = `.${withPseudoStyle(className, pseudo)}{${prop}:${value};}`;
  return [className, style];
}
