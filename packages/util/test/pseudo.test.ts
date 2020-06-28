import {
  isSimplePseudo,
  isAdvancedPseudo,
  isPseudo,
  withPseudoClassName,
  withPseudoStyle,
} from "../src/pseudo";
import * as a from "../src/pseudo/advancedPseudo";
import * as s from "../src/pseudo/simplePseudo";
import { CSSClass } from "../src/types";

describe("@consencss/util/pseudo", () => {
  const className = `color-blue` as CSSClass;

  describe("Typeguards", () => {
    it("should recognize simplePseudo classes by selector", () => {
      expect(isPseudo("hover")).toBeFalsy();
      expect(isPseudo(":hover")).toBeTruthy();
      expect(isSimplePseudo("hover")).toBeFalsy();
      expect(isSimplePseudo(":hover")).toBeTruthy();
      expect(isAdvancedPseudo("hover")).toBeFalsy();
      expect(isAdvancedPseudo(":hover")).toBeFalsy();
    });

    it("should recognize simplePseudo classes by selector", () => {
      expect(isPseudo("not")).toBeFalsy();
      expect(isPseudo(":not")).toBeTruthy();
      expect(isSimplePseudo("not")).toBeFalsy();
      expect(isSimplePseudo(":not")).toBeFalsy();
      expect(isAdvancedPseudo("not")).toBeFalsy();
      expect(isAdvancedPseudo(":not")).toBeTruthy();
    });

    it("should skip checking with undefined value", () => {
      expect(isPseudo()).toBeFalsy();
      expect(isSimplePseudo()).toBeFalsy();
      expect(isAdvancedPseudo()).toBeFalsy();
    });
  });

  describe("withPseudoClassName", () => {
    it("should append the stripped simple psuedo prefix", () => {
      const simplePseudoClassNameSpy = jest.spyOn(s, "withSimplePseudoClassName");
      expect(withPseudoClassName(className, ":hover")).toEqual(`hover-${className}`);
      expect(simplePseudoClassNameSpy).toHaveBeenCalledWith(className, ":hover");
    });

    it("should append the advanced simple psuedo prefix with undefined value", () => {
      const advancedPseudoClassNameSpy = jest.spyOn(a, "withAdvancedPseudoClassName");
      expect(withPseudoClassName(className, "::cue")).toEqual(`cue-${className}`);
      expect(advancedPseudoClassNameSpy).toHaveBeenCalledWith(className, "::cue", undefined);
    });

    it("should append the advanced simple psuedo prefix with sanitized value", () => {
      expect(withPseudoClassName(className, ":dir", "ltr")).toEqual(`dir-ltr-${className}`);
      expect(withPseudoClassName(className, ":nth-child", 6)).toEqual(`nth-child-6-${className}`);
      expect(withPseudoClassName(className, ":nth-child", `6n+1`)).toEqual(
        `nth-child-6n-1-${className}`
      );
      expect(withPseudoClassName(className, ":is", "header, main, footer")).toEqual(
        `is-header-main-footer-${className}`
      );
      expect(withPseudoClassName(className, ":has", "+ p")).toEqual(`has--p-${className}`);
    });

    it("should not append the stripped psuedo prefix with incorrect selector", () => {
      expect(withPseudoClassName(className)).toEqual(className);
    });
  });

  describe("withPseudoStyle", () => {
    it("should append the stripped psuedo prefix", () => {
      const simplePseudoStyleSpy = jest.spyOn(s, "withSimplePseudoStyle");
      expect(withPseudoStyle(className, ":hover")).toEqual(`${className}:hover`);
      expect(simplePseudoStyleSpy).toHaveBeenCalledWith(className, ":hover");
    });

    it("should append the advanced simple psuedo prefix with undefined value", () => {
      const advancedPseudoStyleSpy = jest.spyOn(a, "withAdvancedPseudoStyle");
      expect(withPseudoStyle(className, "::cue")).toEqual(`${className}::cue`);
      expect(advancedPseudoStyleSpy).toHaveBeenCalledWith(className, "::cue", undefined);
      expect(() => withPseudoStyle(className, ":dir")).toThrowError(
        `Pseudo value :dir requires a value to be passed along`
      );
    });

    it("should append the advanced simple psuedo prefix with string or number values", () => {
      const composeAdvancedPseudoSpy = jest.spyOn(a, "composeAdvancedPseudo");
      expect(withPseudoStyle(className, ":nth-child", 6)).toEqual(`${className}:nth-child(6)`);
      expect(composeAdvancedPseudoSpy).toHaveBeenCalledWith(":nth-child", 6);

      expect(withPseudoStyle(className, ":nth-child", `6n+1`)).toEqual(
        `${className}:nth-child(6n+1)`
      );
      expect(withPseudoStyle(className, ":dir", `rtl`)).toEqual(`${className}:dir(rtl)`);
    });

    it("should not append the stripped psuedo prefix with incorrect selector", () => {
      expect(withPseudoStyle(className)).toEqual(className);
    });
  });
});
