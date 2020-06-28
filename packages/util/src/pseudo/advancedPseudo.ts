import { CSSClass } from "../types";
import { sanitizeValue } from "../util";

export const advancedPseudos = {
  ":-moz-any": "moz-any",
  ":-webkit-any": "webkit-any",
  "::cue": "cue",
  "::cue-region": "cue-region",
  "::part": "part",
  "::slotted": "slotted",
  ":dir": "dir",
  ":has": "has",
  ":host": "host",
  ":host-context": "host-context",
  ":is": "is",
  ":lang": "lang",
  ":matches": "matches",
  ":not": "not",
  ":nth-child": "nth-child",
  ":nth-last-child": "nth-last-child",
  ":nth-last-of-type": "nth-last-of-type",
  ":nth-of-type": "nth-of-type",
  ":where": "where",
};

export type AdvancedPseudoValues = {
  ":-moz-any": string;
  ":-webkit-any": string;
  "::cue"?: string;
  "::cue-region"?: string;
  "::part": string;
  "::slotted": string;
  ":dir": "rtl" | "ltr";
  ":has": string;
  ":host": string;
  ":host-context": string;
  ":is": string;
  ":lang": string;
  ":matches": string;
  ":not": string;
  ":nth-child": number | string;
  ":nth-last-child": number | string;
  ":nth-last-of-type": number | string;
  ":nth-of-type": number | string;
  ":where": string;
};

export type AdvancedPseudos = keyof typeof advancedPseudos;

export const isAdvancedPseudo = (s?: string): s is AdvancedPseudos =>
  Object.keys(advancedPseudos).includes(s || "");

export const composeAdvancedPseudo = (pseudo: AdvancedPseudos, value?: string | number): string => {
  // weed out undefined's first
  if (pseudo !== "::cue" && pseudo !== "::cue-region" && typeof value === "undefined")
    throw new Error(`Pseudo value ${pseudo} requires a value to be passed along`);
  if ((pseudo === "::cue" || pseudo === "::cue-region") && typeof value === "undefined")
    return pseudo;
  // then numbers
  const pseudoValue =
    pseudo === ":nth-child" ||
    pseudo === ":nth-last-child" ||
    pseudo === ":nth-last-of-type" ||
    pseudo === ":nth-of-type"
      ? `${value}`
      : value;

  return `${pseudo}(${pseudoValue})`;
};

export const withAdvancedPseudoClassName = <T extends AdvancedPseudos>(
  className: CSSClass,
  pseudo: T,
  value?: T extends AdvancedPseudos ? AdvancedPseudoValues[T] : undefined
): CSSClass =>
  // cast value to string to sanitize potential decimals
  `${advancedPseudos[pseudo]}${
    typeof value === "undefined" ? "" : `-${sanitizeValue(`${value}`)}`
  }-${className}` as CSSClass;

export const withAdvancedPseudoStyle = <T extends AdvancedPseudos>(
  className: CSSClass,
  pseudo: T,
  value?: T extends AdvancedPseudos ? AdvancedPseudoValues[T] : undefined
): string => `${className}${composeAdvancedPseudo(pseudo, value)}`;
