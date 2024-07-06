import sumR from "../sum";

describe("Recursive sum", () => {
  test("it sums the numbers of an array", () => {
    expect(sumR([2, 4, 6, 12])).toBe(24);
  });
});
