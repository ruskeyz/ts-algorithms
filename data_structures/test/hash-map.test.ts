import HashMap from "../hash-map";

describe("Hashmap", () => {
  test("Hashmap sets Item", () => {
    const table = new HashMap();
    expect(table.set("firstName", "Obi-Wan")).toBe("Obi-Wan");
  });
  test("Hashmap gets Item", () => {
    const myTable = new HashMap();
    myTable.set("firstName", "Mike");
    myTable.set("lastName", "Wasowski");
    myTable.set("dob", "15/01/1992");
    expect(myTable.get("firstName")).toBe("Mike");
    expect(myTable.get("lastName")).toBe("Wasowski");
    expect(myTable.get("dob")).toBe("15/01/1992");
  });
  test("Returns null when item is not there", () => {
    const t = new HashMap();
    expect(t.get("404")).toBeNull();
  });
  test("Hashmap resizes with increased numberOfItems", () => {
    const tbl = new HashMap();
    tbl.set("firstName", "Mike");
    tbl.set("lastName", "Wasowski");
    expect(tbl.arr.length).toBe(3);
    tbl.set("dob", "15/01/1992");
    tbl.set("age", 5);
    expect(tbl.arr.length).toBe(7);
  });
});
