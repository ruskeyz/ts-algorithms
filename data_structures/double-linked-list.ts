import Node from "./node";

export default class DoublyLinkedList<T> {
  head: Node<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  search(key: T): boolean {
    let node = this.head;
    while (node) {
      if (node.value === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  prepend(data: T) {
    const node = new Node(data);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    this.length++;
    return this.head;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }
  getTail() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }

  insert(data: T) {
    let node = this.head;
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      while (node?.next) {
        node = node.next;
      }
      node!.next = newNode;
      newNode.prev = node;
    }
    this.length++;
    return newNode;
  }

  delete(key: T) {
    let node = this.head;
    while (node) {
      if (node.value === key) {
        if (node.prev) {
          node.prev.next = node.next;
        } else {
          this.head = node.next;
        }
        if (node.next) {
          node.next.prev = node.prev;
        }
        this.length--;
        return node;
      }
      node = node.next;
    }
    return null;
  }
}
