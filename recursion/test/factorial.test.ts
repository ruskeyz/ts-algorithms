import factorial from "../factorial";

describe("Factorial function", () => {
  test("n = 1", () => {
    expect(factorial(1)).toBe(1);
  });
  test("n = 4", () => {
    expect(factorial(4)).toBe(24);
  });
});
