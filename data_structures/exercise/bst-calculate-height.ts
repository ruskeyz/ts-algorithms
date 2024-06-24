import BinarySearchTree from "../binary-search-tree";
import BinaryNode from "../binary-node";

export default class BSTHeightCalculator extends BinarySearchTree {
  getHeightNode(current: BinaryNode<number> | null): number {
    if (!current) {
      return 0;
    }
    let leftHeight = this.getHeightNode(current.left);
    let rightHeight = this.getHeightNode(current.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  getHeight(): number {
    return this.getHeightNode(this.head);
  }
}
