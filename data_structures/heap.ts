export default class MinHeap {
  public length: number;
  private data: number[];
  constructor() {
    this.data = [];
    this.length = 0;
  }

  private heapifyUp(index: number): void {
    if (index === 0) {
      return;
    }
    // base case: if parent < value return
    let parentIdx = this.getParent(index);
    let parentValue = this.data[parentIdx];

    // if parentValue > value, swap
    if (parentValue > this.data[index]) {
      const tmp = this.data[index];
      this.data[index] = parentValue;
      parentValue = tmp;
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(index: number) {
    let leftIndex = this.getLeftChild(index);
    let rightIndex = this.getRightChild(index);
    if (index >= this.length || leftIndex >= this.length) {
      return;
    }

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const v = this.data[index];

    if (leftValue > rightValue && v > rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = v;
      this.heapifyDown(rightIndex);
    } else if (rightValue > leftValue && v > leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = v;
      this.heapifyDown(leftIndex);
    }
  }

  // getLeftChild 2i + 1 - left side child
  private getLeftChild(index: number): number {
    return 2 * index + 1;
  }
  //getRightChild 2i + 2 - right side child
  private getRightChild(index: number): number {
    return 2 * index + 2;
  }
  private getRoot() {
    if (this.data.length > 0) {
      return this.data[0];
    }
  }
  private getParent(index: number): number {
    return Math.floor(index - 1 / 2);
  }
  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number | Error {
    //remove the head of MinHeap, and swap with the last one
    const head = this.data[0];
    const last = this.data[this.length];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return head;
    }

    this.data[0] = last;

    this.heapifyDown(0);
    return head;
  }
}
