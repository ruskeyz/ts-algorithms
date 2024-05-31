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
  test("speed of the algorithm", () => {
    const data = Array.from({ length: 40 }, () => Math.random() * 40);
    const t0 = performance.now();
    bubbleSort(data);
    const t1 = performance.now();
    console.log("Speed of bubbleSort:" + (t1 - t0) + "ms");
  });
  test("build graphs of the algorithm", () => {
    const arr = [10, 100, 200, 500, 1000];
    const res: number[] = [];
    //res.push(arr);
    for (let i = 0; i < arr.length; i++) {
      const data = Array.from({ length: arr[i] }, () => Math.random() * arr[i]);
      const t0 = performance.now();
      bubbleSort(data);
      const t1 = performance.now();
      res.push(t1 - t0);
    }
    console.log("[[" + arr + "],[" + res + "]]");
  });
});
