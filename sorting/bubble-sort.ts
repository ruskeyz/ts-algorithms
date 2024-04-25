/**
 * Implementation of bubble sort
 * @param {number[]} array to be sorted
 * @returns {number[]} the sorted array
 */
export default function bubbleSort(array: number[]): number[] {
  // start with 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  // inside loop, iterate with other one
  // last one is always looped
  return array;
}
