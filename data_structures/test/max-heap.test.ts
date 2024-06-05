import MaxHeap from "../max-heap";

describe("Max Heap", () => {
  test("Heap insert", () => {
    const h = new MaxHeap();
    expect(h.length).toEqual(0);
    h.insert(5);
    h.insert(3);
    h.insert(69);
    h.insert(420);
    h.insert(4);
    h.insert(1);
    h.insert(8);
    h.insert(7);
    console.log(h.data, "data");
    expect(h.length).toBe(8);
    expect(h.delete()).toEqual(420);
    let i = 7;
    while (i > 0) {
      h.delete();
      i--;
    }
    expect(h.length).toBe(0);
  });
});
