/**
 * Create a priority queue with max value at the root
 */
export default class MaxHeap {
  data: number[];
  length: number;
  constructor() {
    this.data = [];
    this.length = 0;
  }

  heapifyUp = (idx: number): void => {
    // base case
    if (idx === 0) {
      return;
    }
    let pIdx = this.getParent(idx);
    let pV = this.data[pIdx];
    let v = this.data[idx];

    // iterate
    if (pV < v) {
      this.data[idx] = pV;
      this.data[pIdx] = v;
      this.heapifyUp(pIdx);
    }
  };
  heapifyDown = (idx: number): void => {
    let lIdx = this.getLeftChild(idx);
    let rIdx = this.getRightChild(idx);
    //base case
    if (idx >= this.length || lIdx >= this.length) {
      return;
    }
    // iterate
    let lV = this.data[lIdx];
    let rV = this.data[rIdx];
    let v = this.data[idx];

    if (lV < rV && v < rV) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    } else if (rV < lV && v < lV) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    }
  };
  getLeftChild = (idx: number): number => idx * 2 + 1;
  getRightChild = (idx: number): number => idx * 2 + 2;
  getParent = (idx: number): number => {
    return Math.floor((idx - 1) / 2);
  };
  insert = (value: number) => {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  };
  delete = () => {
    //swap last and first
    let res = this.data[0];
    let last = this.data[this.length - 1];

    this.length--;
    if (this.length === 0) {
      this.data = [];
      return res;
    }
    this.data[0] = last;
    this.heapifyDown(0);
    return res;
  };
}
