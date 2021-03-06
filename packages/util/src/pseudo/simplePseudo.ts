import { CSSClass } from "../types";

export const simplePseudos = {
  ":-khtml-any-link": "khtml-any-link",
  ":-moz-any-link": "moz-any-link",
  ":-moz-focusring": "moz-focusring",
  ":-moz-full-screen": "moz-full-screen",
  ":-moz-placeholder": "moz-placeholder",
  ":-moz-read-only": "moz-read-only",
  ":-moz-read-write": "moz-read-write",
  ":-ms-fullscreen": "ms-fullscreen",
  ":-ms-input-placeholder": "ms-input-placeholder",
  ":-webkit-any-link": "webkit-any-link",
  ":-webkit-full-screen": "webkit-full-screen",
  "::-moz-placeholder": "moz-placeholder",
  "::-moz-progress-bar": "moz-progress-bar",
  "::-moz-range-progress": "moz-range-progress",
  "::-moz-range-thumb": "moz-range-thumb",
  "::-moz-range-track": "moz-range-track",
  "::-moz-selection": "moz-selection",
  "::-ms-backdrop": "ms-backdrop",
  "::-ms-browse": "ms-browse",
  "::-ms-check": "ms-check",
  "::-ms-clear": "ms-clear",
  "::-ms-fill": "ms-fill",
  "::-ms-fill-lower": "ms-fill-lower",
  "::-ms-fill-upper": "ms-fill-upper",
  "::-ms-input-placeholder": "ms-input-placeholder",
  "::-ms-reveal": "ms-reveal",
  "::-ms-thumb": "ms-thumb",
  "::-ms-ticks-after": "ms-ticks-after",
  "::-ms-ticks-before": "ms-ticks-before",
  "::-ms-tooltip": "ms-tooltip",
  "::-ms-track": "ms-track",
  "::-ms-value": "ms-value",
  "::-webkit-backdrop": "webkit-backdrop",
  "::-webkit-input-placeholder": "webkit-input-placeholder",
  "::-webkit-progress-bar": "webkit-progress-bar",
  "::-webkit-progress-inner-value": "webkit-progress-inner-value",
  "::-webkit-progress-value": "webkit-progress-value",
  "::-webkit-slider-runnable-track": "webkit-slider-runnable-track",
  "::-webkit-slider-thumb": "webkit-slider-thumb",
  "::after": "after",
  "::backdrop": "backdrop",
  "::before": "before",
  "::first-letter": "first-letter",
  "::first-line": "first-line",
  "::grammar-error": "grammar-error",
  "::marker": "marker",
  "::placeholder": "placeholder",
  "::selection": "selection",
  "::spelling-error": "spelling-error",
  ":active": "active",
  ":after": "after",
  ":any-link": "any-link",
  ":before": "before",
  ":blank": "blank",
  ":checked": "checked",
  ":default": "default",
  ":defined": "defined",
  ":disabled": "disabled",
  ":empty": "empty",
  ":enabled": "enabled",
  ":first": "first",
  ":first-child": "first-child",
  ":first-letter": "first-letter",
  ":first-line": "first-line",
  ":first-of-type": "first-of-type",
  ":focus": "focus",
  ":focus-visible": "focus-visible",
  ":focus-within": "focus-within",
  ":fullscreen": "fullscreen",
  ":hover": "hover",
  ":in-range": "in-range",
  ":indeterminate": "indeterminate",
  ":invalid": "invalid",
  ":last-child": "last-child",
  ":last-of-type": "last-of-type",
  ":left": "left",
  ":link": "link",
  ":only-child": "only-child",
  ":only-of-type": "only-of-type",
  ":optional": "optional",
  ":out-of-range": "out-of-range",
  ":placeholder-shown": "placeholder-shown",
  ":read-only": "read-only",
  ":read-write": "read-write",
  ":required": "required",
  ":right": "right",
  ":root": "root",
  ":scope": "scope",
  ":target": "target",
  ":valid": "valid",
  ":visited": "visited",
};

export type SimplePseudos = keyof typeof simplePseudos;

export const isSimplePseudo = (s?: string): s is SimplePseudos =>
  Object.keys(simplePseudos).includes(s || "");

export const withSimplePseudoClassName = (className: CSSClass, pseudo: SimplePseudos): CSSClass =>
  `${simplePseudos[pseudo]}-${className}` as CSSClass;

export const withSimplePseudoStyle = (className: CSSClass, pseudo: SimplePseudos): string =>
  `${className}${pseudo}`;
