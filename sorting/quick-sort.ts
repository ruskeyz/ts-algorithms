function qs(arr: number[], low: number, high: number): number[] {
  // base case
  if (low > high) {
    return arr;
  }
  const pivotIdx = partition(arr, low, high);
  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, high);
  return arr;
}
function partition(arr: number[], low: number, high: number): number {
  let pivot = arr[high];
  let idx = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      idx++;
      // swap(arr[i], arr[idx])
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  // swap idx and high
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}
/**
 * Quick Sort algorithm
 * @param {number[]} arr
 * @returns {number[]} sorted array
 */
export default function quickSort(arr: number[]): number[] {
  return qs(arr, 0, arr.length - 1);
}
