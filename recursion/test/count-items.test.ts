import countItems from "../count-items";

describe("count items recursively", () => {
  test("it counts correctly", () => {
    expect(countItems([1, 2, 3, 4, 5])).toBe(5);
  });
});
