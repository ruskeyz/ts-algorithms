import findMax from "../find-max";

describe("find max recursively", () => {
  test("it works correctly and find max value", () => {
    expect(findMax([1, 4, 99, 2, 3, 9999])).toBe(9999);
  });
});
