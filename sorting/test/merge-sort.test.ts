import mergeSort from "../merge-sort";

describe("Merge sort", () => {
  test("Merge sort one el", () => {
    expect(mergeSort([1])).toEqual([1]);
  });
  test("two el", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
  });
  test("real case", () => {
    const data = [7, 2, 5, 4, 1, 6, 0, 3];

    expect(mergeSort(data)).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });
});
