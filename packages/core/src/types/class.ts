declare const CSSSymbol: unique symbol;

export type CSSClass = string & { readonly __tag: typeof CSSSymbol };

export type ClassStylePair = [CSSClass, string];
