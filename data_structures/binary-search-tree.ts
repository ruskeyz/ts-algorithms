import BinaryNode from "./binary-node";

/**
 * Implement Binary Search Tree with search, findMin, findMax, insert and delete methods
 */
export default class BinarySearchTree {
  head: BinaryNode<number> | null;
  constructor() {
    this.head = null;
  }

  private searchNode(
    current: BinaryNode<number> | null,
    value: number,
  ): boolean {
    //base case
    if (!current) {
      return false;
    }
    if (value === current.value) {
      return true;
    }
    if (current.value < value) {
      return this.searchNode(current.right, value);
    } else {
      return this.searchNode(current.left, value);
    }
  }
  search(value: number) {
    return this.searchNode(this.head, value);
  }
  private findMinNode(current: BinaryNode<number>) {
    if (!current.left) {
      return current.value;
    }
    return this.findMinNode(current.left);
  }
  findMin() {
    if (!this.head) {
      return null;
    } else {
      return this.findMinNode(this.head);
    }
  }
  private findMaxNode(current: BinaryNode<number>) {
    if (!current.right) {
      return current.value;
    }
    return this.findMaxNode(current.right);
  }
  findMax() {
    if (!this.head) {
      return null;
    } else {
      return this.findMaxNode(this.head);
    }
  }
  insert(value: number): void {
    const newNode = new BinaryNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.insertNode(this.head, newNode);
    }
  }
  private insertNode(
    node: BinaryNode<number>,
    newNode: BinaryNode<number>,
  ): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value: number) {}

  private walkTree(
    current: BinaryNode<number> | null,
    path: number[],
  ): number[] {
    //base case
    if (!current) {
      return path;
    }
    //recurse
    this.walkTree(current.left, path);
    path.push(current.value);
    this.walkTree(current.right, path);
    return path;
  }
  //inOrder traversal
  traverse(): number[] {
    return this.walkTree(this.head, []);
  }
}
const t = new BinarySearchTree();
t.insert(2);
t.insert(1);
t.insert(7);
t.insert(33);
t.insert(33);
t.insert(100);
console.log(t.search(5), "search");
console.log(t.findMin(), "findMin");
console.log(t.findMax(), "findMax");
console.log(t.traverse());
console.log(t);
