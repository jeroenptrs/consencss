import { isSimplePseudo, withPseudoClassName, withPseudoStyle } from "../src/pseudo/simplePseudo";
import { CSSClass } from "../src/types";

describe("@consencss/util/pseudo", () => {
  describe("isSimplePseudo", () => {
    it("should recognize simplePseudo classes by selector", () => {
      expect(isSimplePseudo("hover")).toBeFalsy();
      expect(isSimplePseudo(":hover")).toBeTruthy();
    });

    it("should skip simplePseudo checking with undefined value", () => {
      expect(isSimplePseudo()).toBeFalsy();
    });
  });

  const className = `color-blue` as CSSClass;

  describe("withPseudoClassName", () => {
    it("should append the stripped psuedo prefix", () => {
      expect(withPseudoClassName(className, ":hover")).toEqual(`hover-${className}`);
    });

    it("should not append the stripped psuedo prefix with incorrect selector", () => {
      expect(withPseudoClassName(className, "hover")).toEqual(className);
    });
  });

  describe("withPseudoStyle", () => {
    it("should append the stripped psuedo prefix", () => {
      expect(withPseudoStyle(className, ":hover")).toEqual(`${className}:hover`);
    });

    it("should not append the stripped psuedo prefix with incorrect selector", () => {
      expect(withPseudoStyle(className, "hover")).toEqual(className);
    });
  });
});
