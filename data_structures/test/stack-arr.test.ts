import Stack from "../stack-arr";

describe("Stack-array", () => {
  test("constructor", () => {
    const s = new Stack();
    expect(s instanceof Stack);
  });
  test("Array is empty", () => {
    const s = new Stack();
    expect(s.peek()).toBe("empty array");
  });
  test("Can push to stack array", () => {
    const s = new Stack();
    s.push("test1");
    s.push("test2");
    expect(s.length()).toBe(2);
  });
  test("Can pop from stack", () => {
    const s = new Stack();
    s.push("test pop");
    s.pop();
    expect(s.peek()).toBe("empty array");
  });
});
