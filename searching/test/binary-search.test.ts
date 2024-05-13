import binarySearch from "../binary-search";

describe("binarySearch", () => {
  it("expect to return a correct index", () => {
    expect(binarySearch([1, 2, 3], 3)).toEqual(2);
  });
  it("expect to return a correct index", () => {
    expect(binarySearch([1, 2, 3], 1)).toEqual(0);
  });
  it("expect to return -1 if not found", () => {
    expect(binarySearch([1, 2, 3], 4)).toBe(-1);
  });
});
