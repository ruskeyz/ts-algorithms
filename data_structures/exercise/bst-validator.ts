import BinaryNode from "../binary-node";
import BinarySearchTree from "../binary-search-tree";

export default class BinarySearchTreeValidator extends BinarySearchTree {
  private validateNode(
    current: BinaryNode<number> | null,
    s: number,
    b: number,
  ) {
    // base
    if (!current) {
      return true;
    }
    const v = current.value;
    if (v <= s || v >= b) {
      return false;
    }
    const leftOk = this.validateNode(current.left, s, current.value);
    const rightOk = this.validateNode(current.right, current.value, b);

    return leftOk && rightOk;
  }

  validate(): boolean {
    const s = -Infinity;
    const b = Infinity;
    if (!this.head) {
      return false;
    } else {
      return this.validateNode(this.head, s, b);
    }
  }
}
