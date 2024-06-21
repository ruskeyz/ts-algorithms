import BinaryNode from "../binary-node";
import BinarySearchTree from "../binary-search-tree";

describe("Binary Search Tree", () => {
  test("It validates the tree", () => {
    const tree = new BinarySearchTree();
    tree.head = new BinaryNode(10);
    expect(tree.validate()).toBeTruthy();
    expect(tree.validate()).toBeTruthy();
    tree.head.left = new BinaryNode(7);
    expect(tree.validate()).toBeTruthy();
    tree.head.right = new BinaryNode(14);
    expect(tree.validate()).toBeTruthy();
    tree.head.right.right = new BinaryNode(20);
    expect(tree.validate()).toBeTruthy();
    tree.head.right.left = new BinaryNode(9);
    expect(tree.validate()).toBeFalsy();
  });
});
