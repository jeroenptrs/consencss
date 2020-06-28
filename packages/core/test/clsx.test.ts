import { classNames } from "../src";

import { CSSClass } from "@consencss/util";

describe("clsx", () => {
  const clnm1 = "a" as CSSClass;

  it("should not do something special with 1 single className", () => {
    expect(classNames(clnm1)).toBe(`a`);
  });

  it("should properly append multiple classNames", () => {
    expect(classNames(clnm1, clnm1)).toBe(`a a`);
  });
});
