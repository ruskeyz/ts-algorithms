// / / / Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the  function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference
// Input Format
// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
// Constraints
//
// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

export default function diagonalDifference(arr: number[][]): number {
  // calculate diagonal length
  const diagonalLength = arr.length;

  let idx = 0;
  let rIdx = diagonalLength - 1;
  let leftSum = 0;
  let rightSum = 0;
  // calculate left diagonal sum
  while (idx < diagonalLength) {
    leftSum += arr[idx][idx];
    idx++;
  }
  // calculate right diagonal sum
  idx = 0;
  while (rIdx >= 0) {
    rightSum += arr[idx][rIdx];
    idx++;
    rIdx--;
  }
  // calculate absolute
  return Math.abs(leftSum - rightSum);
}
