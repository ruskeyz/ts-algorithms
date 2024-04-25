import bubbleSort from "../bubble-sort";

describe("bubble sort", () => {
  test("empty", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("one element", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  test("two elements", () => {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
  });
  test("real case", () => {
    const data = [1, 3, 7, 4, 2];
    expect(bubbleSort(data)).toEqual([1, 2, 3, 4, 7]);
  });
});
