export default function quickSortRecursive(arr: number[]): number[] {
  const pivot = Math.floor(arr.length / 2);
  let left: number[] = [];
  let right: number[] = [];
  //base case
  if (arr.length <= 1) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i !== pivot) {
        if (arr[i] < arr[pivot]) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
    return [
      ...quickSortRecursive(left),
      arr[pivot],
      ...quickSortRecursive(right),
    ];
  }
}
