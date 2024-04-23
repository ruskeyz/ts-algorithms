import Node from "./node";

export default class Queue<T> {
  first: Node<T> | null;
  last: Node<T> | null;
  _length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {T} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item: T): number {
    // xx
    const newNode = new Node(item);
    if (this._length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this._length++;
    return this._length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue(): T | undefined {
    // ...
    if (!this.first) {
      return undefined;
    }
    // 0
    if (this._length === 1) {
      this.last = null;
    }
    // 0 -> 0
    const firstNode = this.first;
    this.first = this.first.next;
    this._length--;
    if (this.first) {
      return firstNode.value;
    }
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty(): boolean {
    if (this._length === 0) {
      return true;
    }
    return false;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {T | undefined} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front(): T | undefined {
    if (this.first === null) {
      return undefined;
    }
    return this.first.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {T | undefined} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back(): T | undefined {
    if (this.last === null) {
      return undefined;
    }
    return this.last.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length(): number {
    return this._length;
  }
}
