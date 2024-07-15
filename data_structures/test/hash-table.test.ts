import HashTable from "../hash-table";

describe("Hash Table", () => {
  let ht: HashTable<string, string>;
  beforeEach(() => {
    ht = new HashTable();
  });
  test("it sets Item", () => {
    ht.set("name", "Obi-Wan");
    expect(ht.length).toBe(1);
  });
  test("it gets Item", () => {
    ht.set("firstName", "Mike");
    ht.set("lastName", "Wasowski");
    ht.set("dob", "15/01/1992");
    expect(ht.get("firstName")).toBe("Mike");
    expect(ht.get("lastName")).toBe("Wasowski");
    expect(ht.get("dob")).toBe("15/01/1992");
  });
  test("Returns null when item is not there", () => {
    expect(ht.get("404")).toBeNull();
  });
  test("it resizes with increased numberOfItems", () => {
    ht.set("firstName", "Mike");
    ht.set("lastName", "Wasowski");
    expect(ht.length).toBe(2);
    ht.set("dob", "15/01/1992");
    ht.set("age", "5");
    expect(ht.length).toBe(4);
  });
  test("it deletes the value", () => {
    ht.set("item", "bin");
    expect(ht.length).toBe(1);
    ht.delete("item");
    expect(ht.length).toBe(0);
  });
  test("deleting non-existing key is nul", () => {
    expect(ht.delete("404")).toBeNull();
  });
});
