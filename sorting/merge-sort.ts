/**
 * Merge sort function
 * @param {number[]} arr of numbers
 * @returns {number[]}
 */
export default function mergeSort(arr: number[]): number[] {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  // sort the left half
  let left = mergeSort(arr.slice(0, middle));
  // sort the right half
  let right = mergeSort(arr.slice(middle));
  // merge
  return merge(left, right);
}

function merge(left: number[], right: number[]) {
  const res: ReturnType<typeof mergeSort> = [];

  let leftTraverse = 0;
  let rightTraverse = 0;

  while (leftTraverse < left.length && rightTraverse < right.length) {
    if (left[leftTraverse] < right[rightTraverse]) {
      res.push(left[leftTraverse]);
      leftTraverse++;
    } else {
      res.push(right[rightTraverse]);
      rightTraverse++;
    }
  }
  // merge any remaining pieces from left array sliced from leftTraverse, then the same for right
  res.push(...left.slice(leftTraverse), ...right.slice(rightTraverse));

  return res;
}
