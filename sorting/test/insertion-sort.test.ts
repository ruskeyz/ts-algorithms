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
  test("speed of the algorithm", () => {
    const data = Array.from({ length: 40 }, () => Math.random() * 40);
    const t0 = performance.now();
    insertionSort(data);
    const t1 = performance.now();
    console.log("Speed of insertionSort:" + (t1 - t0) + "ms");
  });
  test("build graphs of the algorithm", () => {
    const arr = [10, 100, 200, 500, 1000];
    const res: number[] = [];
    //res.push(arr);
    for (let i = 0; i < arr.length; i++) {
      const data = Array.from({ length: arr[i] }, () => Math.random() * arr[i]);
      const t0 = performance.now();
      insertionSort(data);
      const t1 = performance.now();
      res.push(t1 - t0);
    }
    console.log("[[" + arr + "],[" + res + "]]");
  });
});
