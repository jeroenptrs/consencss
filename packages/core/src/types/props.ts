import CSS from "csstype";

export type PropKey = keyof CSS.PropertiesHyphen;
export type PropValue<T extends PropKey> = CSS.PropertiesHyphen[T];
