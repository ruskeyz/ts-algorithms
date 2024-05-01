import quickSort from "../quick-sort";

describe("Quick sort function", () => {
  test("1 element", () => {
    expect(quickSort([1])).toEqual([1]);
  });
  test("2 el", () => {
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort([1, 2])).toEqual([1, 2]);
  });
  test("real case", () => {
    const data = [9, 3, 7, 4, 69, 420, 42];
    expect(quickSort(data)).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });
});
