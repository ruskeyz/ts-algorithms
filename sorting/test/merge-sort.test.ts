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
  test("speed of the algorithm", () => {
    const data = Array.from({ length: 40 }, () => Math.random() * 40);
    const t0 = performance.now();
    mergeSort(data);
    const t1 = performance.now();
    console.log("Speed of mergeSort:" + (t1 - t0) + "ms");
  });

  test("build graphs of the algorithm", () => {
    const arr = [10, 100, 200, 500, 1000];
    const res: number[] = [];
    //res.push(arr);
    for (let i = 0; i < arr.length; i++) {
      const data = Array.from({ length: arr[i] }, () => Math.random() * arr[i]);
      const t0 = performance.now();
      mergeSort(data);
      const t1 = performance.now();
      res.push(t1 - t0);
    }
    console.log("[[" + arr + "],[" + res + "]]");
  });
});
