/**
 * Implement insertion sort
 * @param arr takes an array of numbers
 * @returns sorted array of numbers in ascending order
 */
export default function insertionSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      //do the swap
      const tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;
      j -= 1;
    }
  }
  return arr;
}
