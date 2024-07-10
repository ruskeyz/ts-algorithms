/**
 * binarySearch function to search sorted arrays [lo is inclusive, hi) is not inclusive
 * @param arr: number[], value: number
 * @returns number index in an array
 */
export default function binarySearch(arr: number[], value: number): number {
  // [lo, hi)
  // [0, m, N]
  let lo = 0;
  let hi = arr.length;

  while (lo < hi) {
    let m = Math.floor(lo + (hi - lo) / 2);
    if (arr[m] === value) {
      // return found index
      return m;
      // search left half
    } else if (arr[m] > value) {
      hi = m;
      // search right half
    } else if (arr[m] < value) {
      lo = m + 1;
    }
  }
  return -1;
}
