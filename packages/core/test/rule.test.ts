import * as util from "@consencss/util";

import { rule, createRule } from "../src/rule";

describe("@consencss/core/rule", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("rule", () => {
    const spy = jest.spyOn(util, "addToCacheAndSheet");

    it("should call sheet.add", () => {
      expect(rule("color", "blue")).toEqual(`color-blue`);
      expect(spy).toHaveBeenCalledWith([`color-blue`, `.color-blue{color:blue;}`]);
    });
  });

  describe("createRule", () => {
    it("returns a ClassStylePair", () => {
      expect(createRule("color", "blue")).toEqual([`color-blue`, `.color-blue{color:blue;}`]);
    });

    it("returns a ClassStylePair containing a pseudo selector", () => {
      expect(createRule("color", "blue", ":hover")).toEqual([
        `hover-color-blue`,
        `.hover-color-blue:hover{color:blue;}`,
      ]);
    });

    it("returns a ClassStylePair containing an advanced pseudo selector and no pseudoValue", () => {
      expect(createRule("color", "blue", "::cue")).toEqual([
        `cue-color-blue`,
        `.cue-color-blue::cue{color:blue;}`,
      ]);
    });

    it("returns a ClassStylePair containing an advanced pseudo selector and a non-empty pseudoValue", () => {
      expect(createRule("color", "blue", ":nth-child", 6)).toEqual([
        `nth-child-6-color-blue`,
        `.nth-child-6-color-blue:nth-child(6){color:blue;}`,
      ]);
      expect(createRule("color", "blue", ":nth-child", `6n+1`)).toEqual([
        `nth-child-6n-1-color-blue`,
        `.nth-child-6n-1-color-blue:nth-child(6n+1){color:blue;}`,
      ]);
    });
  });
});
