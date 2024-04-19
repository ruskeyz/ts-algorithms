import exp from "constants";
import Queue from "../queue-list";

describe("Queue-list", () => {
  test("Contructor", () => {
    const q = new Queue();
    expect(q instanceof Queue);
  });
  test("It adds to the q", () => {
    const q = new Queue();
    expect(q.length()).toBe(0);
    q.enqueue(1);
    expect(q.length()).toBe(1);
  });
  test("it removes from q", () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.front()).toBe(1);
    q.dequeue();
    expect(q.front()).toBe(2);
    q.dequeue();
    expect(q.front()).toBe(undefined);
  });
  test("Is empty", () => {
    const q = new Queue();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(1);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });
});
