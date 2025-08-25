import { buildWordDict, WordDict } from "../markovChain";

describe("buildWordDict", () => {
  it("should correctly build a word dictionary from a simple string", () => {
    const text = "hello world hello there";
    const expectedDict: WordDict = {
      hello: { world: 1, there: 1 },
      world: { hello: 1 },
    };
    const result = buildWordDict(text);
    expect(result).toEqual(expectedDict);
  });

  it("should handle punctuation and case", () => {
    const text = "Hello, world! Hello again.";
    const expectedDict: WordDict = {
      hello: { world: 1, again: 1 },
      world: { hello: 1 },
    };
    const result = buildWordDict(text);
    expect(result).toEqual(expectedDict);
  });

  it("should handle multiple spaces", () => {
    const text = "a  b   c";
    const expectedDict: WordDict = {
      a: { b: 1 },
      b: { c: 1 },
    };
    const result = buildWordDict(text);
    expect(result).toEqual(expectedDict);
  });

  it("should return an empty object for an empty string", () => {
    const text = "";
    const expectedDict: WordDict = {};
    const result = buildWordDict(text);
    expect(result).toEqual(expectedDict);
  });

  it("should return an empty object for a string with one word", () => {
    const text = "hello";
    const expectedDict: WordDict = {};
    const result = buildWordDict(text);
    expect(result).toEqual(expectedDict);
  });
});
