import quickSort from "../quick-sort-2";

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
  test("speed of the algorithm", () => {
    const data = Array.from({ length: 40 }, () => Math.random() * 40);
    const t0 = performance.now();
    quickSort(data);
    const t1 = performance.now();
    console.log("Speed of quickSort:" + (t1 - t0) + "ms");
  });
  test("build graphs of the algorithm", () => {
    const arr = [10, 100, 200, 500, 1000];
    const res: number[] = [];
    //res.push(arr);
    for (let i = 0; i < arr.length; i++) {
      const data = Array.from({ length: arr[i] }, () => Math.random() * arr[i]);
      const t0 = performance.now();
      quickSort(data);
      const t1 = performance.now();
      res.push(t1 - t0);
    }
    console.log("[[" + arr + "],[" + res + "]]");
  });
});
