import heapSort from "../heap-sort";

describe("Heap Sort", () => {
  test("sorts an array", () => {
    expect(heapSort([4, 2, 420, 7])).toStrictEqual([2, 4, 7, 420]);
  });
});
