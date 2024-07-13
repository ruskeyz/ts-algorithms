import BinaryNode from "../binary-node";
import BinarySearchTree from "../binary-search-tree";
import BinarySearchTreeValidator from "../exercise/bst-validator";
import BSTHeightCalculator from "../exercise/bst-calculate-height";

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it("should insert nodes correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    expect(bst.traverse()).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it("should search for nodes correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    expect(bst.search(5)).toBe(true);
    expect(bst.search(2)).toBe(true);
    expect(bst.search(9)).toBe(false);
  });

  it("should find the minimum value correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);
    bst.insert(6);
    bst.insert(8);

    expect(bst.findMin()).toBe(2);
  });

  it("should return the maximum value when all numbers are positive", () => {
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }
    expect(bst.findMax()).toBe(5);
  });

  it("should return the maximum value when all numbers are negative", () => {
    const numbers = [-5, -4, -3, -2, -1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }
    expect(bst.findMax()).toBe(-1);
  });

  it("should return the maximum value when numbers are a mix of positive and negative numbers", () => {
    const numbers = [-5, 2, -3, 4, -1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(4);
  });

  it("should return the maximum value when numbers include zero", () => {
    const numbers = [0, -2, 3, 0, 5];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(5);
  });

  it("should return the maximum value when numbers include duplicates", () => {
    const numbers = [3, 5, 3, 2, 5];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(5);
  });

  it("should return the maximum value when all numbers are positive", () => {
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(5);
  });

  it("should return the maximum value when all numbers are negative", () => {
    const numbers = [-5, -4, -3, -2, -1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(-1);
  });

  it("should return the maximum value when numbers are a mix of positive and negative numbers", () => {
    const numbers = [-5, 2, -3, 4, -1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(4);
  });

  it("should return the maximum value when numbers include zero", () => {
    const numbers = [0, 2, -3, 4, -1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(4);
  });

  it("should return the maximum value when numbers include duplicates", () => {
    const numbers = [5, 2, 5, 4, 1];
    for (let i = 0; i < numbers.length; i++) {
      bst.insert(numbers[i]);
    }

    expect(bst.findMax()).toBe(5);
  });
  test("Inserts and traverses the tree according to BST condition", () => {
    const t = new BinarySearchTree();
    t.insert(2);
    t.insert(1);
    t.insert(3);
    expect(t.traverse()).toStrictEqual([1, 2, 3]);
  });
  test("It searches the value", () => {
    const t = new BinarySearchTree();
    t.insert(2);
    t.insert(4);
    t.insert(6);
    expect(t.search(2)).toBeTruthy();
    expect(t.search(4)).toBeTruthy();
    expect(t.search(6)).toBeTruthy();
    expect(t.search(999)).toBeFalsy();
  });
  test("it deletes the value", () => {
    const t = new BinarySearchTree();
    t.insert(1);
    t.delete(1);
    expect(t.search(1)).toBeFalsy();
  });
  test("It finds the min value", () => {
    const t = new BinarySearchTree();
    expect(t.findMin()).toBeNull();
    t.insert(1000);
    t.insert(99999);
    t.insert(1);
    expect(t.findMin()).toBe(1);
  });
  test("It finds the max value", () => {
    const t = new BinarySearchTree();
    expect(t.findMax()).toBeNull();
    t.insert(1000);
    t.insert(99999);
    t.insert(1);
    expect(t.findMax()).toBe(99999);
  });
  test("It validates the tree", () => {
    const tree = new BinarySearchTreeValidator();
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
  it("Calculates the height of the tree", () => {
    const t = new BSTHeightCalculator();
    t.insert(2);
    t.insert(4);
    t.insert(6);
    t.insert(7);
    expect(t.getHeight()).toBe(4);
  });
});
