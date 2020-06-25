import CSS from "csstype";

declare const CSSSymbol: unique symbol;

export type CSSClass = string & { readonly __tag: typeof CSSSymbol };

export type ClassStylePair = [CSSClass, string];

export type PropKey = keyof CSS.PropertiesHyphen;

export type PropValue<T extends PropKey> = CSS.PropertiesHyphen[T];
