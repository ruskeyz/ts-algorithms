class Node<T> {
  public prev: Node<T> | null;
  constructor(public value: T) {
    this.value = value;
    this.prev = null;
  }
}
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
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this.top;
    if (node) {
      this.top = node.prev;
      node.prev = null;
      this.amount--;
      return node.value;
    }
    return undefined;
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
