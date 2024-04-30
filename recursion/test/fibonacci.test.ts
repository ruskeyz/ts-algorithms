import fibonacci from "../fibonacci";

describe("Fibonacci", () => {
  test("is 0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  test("is 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  test("real case, n is 6", () => {
    expect(fibonacci(6)).toBe(8);
  });
});
