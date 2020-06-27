import * as cache from "../src/cache";
import * as sheet from "../src/sheet";
import { ClassStylePair } from "../src/types";
import { addToCacheAndSheet, sanitizeValue } from "../src/util";

jest.mock("../src/sheet", () => ({
  add: jest.fn(),
}));

describe("@consencss/util/util", () => {
  describe("addToCacheAndSheet", () => {
    beforeEach(() => {
      jest.clearAllMocks();
      cache.clear();
    });

    it("should call cache and sheet with proper values", () => {
      const cacheAddSpy = jest.spyOn(cache, "add");
      const cacheHasSpy = jest.spyOn(cache, "has");

      addToCacheAndSheet(["a", "b"] as ClassStylePair);

      expect(cacheHasSpy).toHaveBeenCalledWith("a");
      expect(cacheAddSpy).toHaveBeenCalledWith("a");
      expect(sheet.add).toHaveBeenCalledWith("b");
    });

    it("should skip dupe calls", () => {
      const cacheAddSpy = jest.spyOn(cache, "add");
      const cacheHasSpy = jest.spyOn(cache, "has");

      addToCacheAndSheet(["a", "b"] as ClassStylePair);
      addToCacheAndSheet(["a", "c"] as ClassStylePair);

      expect(cacheHasSpy).toHaveBeenCalledTimes(2);
      expect(cacheAddSpy).toHaveBeenCalledTimes(1);
      expect(sheet.add).toHaveBeenCalledTimes(1);
    });
  });

  describe("sanitizeValue", () => {
    it("should strip special characters except dash and underscore and replace them with dashes", () => {
      expect(sanitizeValue(`abcdef-ghijkl_mnop !!!qrstuvw,.xyz0123@#$456&*()7890=+`)).toEqual(
        `abcdef-ghijkl_mnop-qrstuvw-xyz0123-456-7890-`
      );
    });

    it("should skip non string values", () => {
      expect(sanitizeValue(0)).toEqual(0);
      expect(sanitizeValue(1)).toEqual(1);
      expect(sanitizeValue(-1)).toEqual(-1);
      expect(sanitizeValue(false)).toBeFalsy();
      expect(sanitizeValue(true)).toBeTruthy();
    });
  });
});
