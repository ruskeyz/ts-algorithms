/*
 * Write a recursive function to count the number of items in a list.
 */
export default function countItems(arr: number[]): number {
  // base case, if there is no numbers
  if (arr.length === 0) {
    return 0;
  }
  let count = 1 + countItems(arr.slice(0, arr.length - 1));
  return count;
}
console.log(countItems([1, 2, 3, 4, 5]));
