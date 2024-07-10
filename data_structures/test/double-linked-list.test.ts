import DoublyLinkedList from "../double-linked-list";

describe("Double Linked List", () => {
  test("it creates a DLL", () => {
    const dll = new DoublyLinkedList();
    expect(dll).toBeInstanceOf(DoublyLinkedList);
  });
  test("it prepends correctly", () => {
    const dl = new DoublyLinkedList();
    dl.prepend(1);
    expect(dl.getHead()).toBe(1);
    expect(dl.length).toBe(1);
  });
  test("it inserts correctly", () => {
    const d = new DoublyLinkedList();
    d.insert(1);
    d.insert(2);
    d.insert(3);
    expect(d.length).toBe(3);
    expect(d.getHead()).toBe(1);
    expect(d.getTail()).toBe(3);
  });
  test("it searches correctly", () => {
    const d = new DoublyLinkedList();
    d.insert(1);
    d.insert(2);
    d.insert(3);
    expect(d.search(3)).toBeTruthy();
    expect(d.search(404)).toBeFalsy();
  });
  test("it deletes correctly", () => {
    const d = new DoublyLinkedList();
    d.insert(1);
    d.insert(2);
    d.insert(3);
    d.delete(3);
    expect(d.length).toBe(2);
    expect(d.search(3)).toBeFalsy();
  });
});
