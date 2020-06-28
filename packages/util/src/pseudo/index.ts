import * as a from "./advancedPseudo";
import * as s from "./simplePseudo";
import { CSSClass } from "../types";

export type Pseudos = a.AdvancedPseudos | s.SimplePseudos;

export const isPseudo = (v?: string): v is Pseudos => s.isSimplePseudo(v) || a.isAdvancedPseudo(v);

// TODO: SWITCH TO OVERLOADED TYPES
export const withPseudoStyle = <T extends Pseudos>(
  className: CSSClass,
  pseudo?: T,
  value?: T extends a.AdvancedPseudos ? a.AdvancedPseudoValues[T] : undefined
): string => {
  if (s.isSimplePseudo(pseudo)) return s.withSimplePseudoStyle(className, pseudo);
  else if (a.isAdvancedPseudo(pseudo)) return a.withAdvancedPseudoStyle(className, pseudo, value);
  else return className;
};

// TODO: SWITCH TO OVERLOADED TYPES
export const withPseudoClassName = <T extends Pseudos>(
  className: CSSClass,
  pseudo?: T,
  value?: T extends a.AdvancedPseudos ? a.AdvancedPseudoValues[T] : undefined
): CSSClass => {
  if (s.isSimplePseudo(pseudo)) return s.withSimplePseudoClassName(className, pseudo);
  else if (a.isAdvancedPseudo(pseudo))
    return a.withAdvancedPseudoClassName(className, pseudo, value);
  else return className;
};

export * from "./advancedPseudo";
export * from "./simplePseudo";
