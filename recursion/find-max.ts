export default function findMax(arr: number[]): number {
  //base case
  if (arr.length === 1) {
    return arr[0];
  }
  //recursive case
  return Math.max(arr.shift()!, findMax(arr));
}
console.log(findMax([1, 4, 99, 2, 3, 9999]));
