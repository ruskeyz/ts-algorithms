import Node from "./node";

export default class Stack<T> {
  top: Node<T> | null;
  amount: number;
  constructor() {
    this.top = null;
    this.amount = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   */
  push(item: T): number {
    const node = new Node(item);
    node.prev = this.top;
    this.top = node;
    this.amount++;
    return this.amount;
  }

  /**
   * Remove an item at the top of the stack.
   */
  pop(): T | null {
    const node = this.top;
    if (node) {
      this.top = node.prev;
      node.prev = null;
      this.amount--;
      return node.value;
    }
    return null;
  }
  /**
   * Determines if the stack is empty.
   */
  isEmpty(): boolean {
    return this.amount === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   */
  peek(): T | undefined {
    if (this.top === null) {
      return undefined;
    }
    return this.top.value;
  }

  /**
   * Returns the number of items in the stack.
   */
  length(): number {
    return this.amount;
  }
}
