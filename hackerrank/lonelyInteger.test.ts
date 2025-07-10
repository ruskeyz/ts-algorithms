import lonelyinteger from "./lonelyInteger";
import { describe, it, expect } from "@jest/globals";

describe("lonelyinteger", () => {
  it("should find the unique element in a simple array", () => {
    expect(lonelyinteger([1, 1, 2])).toBe(2);
  });

  it("should find the unique element in a more complex array", () => {
    expect(lonelyinteger([0, 0, 1, 2, 1])).toBe(2);
  });

  it("should return the element if it's the only one in the array", () => {
    expect(lonelyinteger([1])).toBe(1);
  });

  it("should handle a different set of numbers", () => {
    expect(lonelyinteger([4, 9, 9, 4, 8])).toBe(8);
  });
});
