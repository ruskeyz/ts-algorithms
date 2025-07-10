import countingSort from "./countingSort";
import { describe, it, expect } from "@jest/globals";

describe("countingSort", () => {
  it("should sort a simple array of numbers", () => {
    const arr = [1, 1, 3, 2, 1];
    const expected = [1, 1, 1, 2, 3];
    expect(countingSort(arr)).toEqual(expected);
  });

  it("should return an empty array for an empty input array", () => {
    const arr: number[] = [];
    const expected: number[] = [];
    expect(countingSort(arr)).toEqual(expected);
  });

  it("should handle an array with all same elements", () => {
    const arr = [5, 5, 5, 5, 5];
    const expected = [5, 5, 5, 5, 5];
    expect(countingSort(arr)).toEqual(expected);
  });

  it("should handle an array that is already sorted", () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(countingSort(arr)).toEqual(expected);
  });

  it("should handle an array with boundary values (0 and 99)", () => {
    const arr = [99, 0, 50, 25, 75, 0, 99];
    const expected = [0, 0, 25, 50, 75, 99, 99];
    expect(countingSort(arr)).toEqual(expected);
  });
});
