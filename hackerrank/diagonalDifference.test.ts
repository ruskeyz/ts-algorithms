import diagonalDifference from "./diagonalDifference";
import { describe, it, expect } from "@jest/globals";

describe("diagonalDifference", () => {
  it("should return the correct absolute difference for a 3x3 matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ];
    expect(diagonalDifference(matrix)).toBe(2);
  });

  it("should return the correct absolute difference for another 3x3 matrix with negative numbers", () => {
    const matrix = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    expect(diagonalDifference(matrix)).toBe(15);
  });

  it("should return 0 for a 1x1 matrix", () => {
    expect(diagonalDifference([[10]])).toBe(0);
  });

  it("should return 0 for a 2x2 matrix when diagonals are equal", () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    expect(diagonalDifference(matrix)).toBe(0);
  });
});
