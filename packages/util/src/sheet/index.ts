const documentExists = typeof document !== "undefined";

// TODO: this will not work outside of dom thus acts as placeholder. Replace with actual node lib.
const createStyleSheet = (): CSSStyleSheet => new CSSStyleSheet();

let sheet: CSSStyleSheet | null;

export const exists = () => Boolean(sheet);

if (documentExists) {
  const _style =
    (document.getElementById("consencss_sheet") as HTMLStyleElement) ||
    document.createElement("style");
  if (!_style.id) _style.id = "consencss_sheet";
  sheet = document.head.appendChild(_style).sheet;
} else {
  sheet = createStyleSheet();
}

export const add = (rule: string) => sheet?.insertRule(rule, sheet?.cssRules.length);
