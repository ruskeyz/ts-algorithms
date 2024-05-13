import linearSearch from "../linear-search";

describe("linearSearch", () => {
  it("gives true if found", () => {
    expect(linearSearch([1, 2], 1)).toBeTruthy();
  });
  it("gives false if not found", () => {
    expect(linearSearch([100, 99], 1)).toBeFalsy();
  });
});
