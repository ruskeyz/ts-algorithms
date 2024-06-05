import MaxHeap from "../data_structures/max-heap";

export default function heapSort(arr: number[]) {
  let heap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }
  let res: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let mV = heap.delete();
    res.unshift(mV);
  }
  return res;
}
