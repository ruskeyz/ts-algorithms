import HashMap from "../hash-map";

describe("Hashmap", () => {
  test("Hashmap sets Item", () => {
    const table = new HashMap();
    expect(table.setItem("firstName", "Obi-Wan")).toBe("Obi-Wan");
  });
  test("Hashmap gets Item", () => {
    const myTable = new HashMap();
    myTable.setItem("firstName", "Mike");
    myTable.setItem("lastName", "Wasowski");
    myTable.setItem("dob", "15/01/1992");
    expect(myTable.getItem("firstName")).toBe("Mike");
    expect(myTable.getItem("lastName")).toBe("Wasowski");
    expect(myTable.getItem("dob")).toBe("15/01/1992");
  });
  test("Returns null when item is not there", () => {
    const t = new HashMap();
    expect(t.getItem("404")).toBeNull();
  });
  test("Hashmap resizes with increased numberOfItems", () => {
    const tbl = new HashMap();
    tbl.setItem("firstName", "Mike");
    tbl.setItem("lastName", "Wasowski");
    expect(tbl.arr.length).toBe(3);
    tbl.setItem("dob", "15/01/1992");
    tbl.setItem("age", 5);
    expect(tbl.arr.length).toBe(7);
  });
});