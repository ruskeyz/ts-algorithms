export default function sumR(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr[0] + sumR(arr.slice(1));
  return sum;
}
