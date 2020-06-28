import {
  addToCacheAndSheet,
  ClassStylePair,
  CSSClass,
  PropKey,
  PropValue,
  sanitizeValue,
  SimplePseudos,
  AdvancedPseudos,
  AdvancedPseudoValues,
  Pseudos,
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
  pseudo: "::cue" | "::cue-region"
): CSSClass;
export function rule<T extends PropKey, U extends AdvancedPseudos>(
  prop: T,
  value: PropValue<T>,
  pseudo: U,
  pseudoValue: AdvancedPseudoValues[U]
): CSSClass;
export function rule<T extends PropKey, U extends Pseudos>(
  prop: T,
  value: PropValue<T>,
  pseudo?: U,
  pseudoValue?: U extends AdvancedPseudos ? AdvancedPseudoValues[U] : undefined
): CSSClass {
  const pair = createRule(prop, value, pseudo as any, pseudoValue);
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
  pseudo: "::cue" | "::cue-region"
): ClassStylePair;
export function createRule<T extends PropKey, U extends AdvancedPseudos>(
  prop: T,
  value: PropValue<T>,
  pseudo: U,
  pseudoValue: AdvancedPseudoValues[U]
): ClassStylePair;
export function createRule<T extends PropKey, U extends Pseudos>(
  prop: T,
  value: PropValue<T>,
  pseudo?: U,
  pseudoValue?: U extends AdvancedPseudos ? AdvancedPseudoValues[U] : undefined
): ClassStylePair {
  // TODO: create value() util for stuff like border
  const className = withPseudoClassName(
    `${prop}-${sanitizeValue(value)}` as CSSClass,
    pseudo,
    pseudoValue
  );
  const style = `.${withPseudoStyle(className, pseudo, pseudoValue)}{${prop}:${value};}`;
  return [className, style];
}
