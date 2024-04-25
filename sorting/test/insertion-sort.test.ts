import insertionSort from "../insertion-sort";

describe("insertionSort", () => {
  test("empty", () => {
    expect(insertionSort([])).toEqual([]);
  });

  test("one element", () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  test("two elements", () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
    expect(insertionSort([1, 2])).toEqual([1, 2]);
  });
  test("real case", () => {
    const data = [2, 8, 5, 3, 9, 4];

    expect(insertionSort(data)).toEqual(data.sort());
  });
});
