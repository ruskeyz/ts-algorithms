// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previos values, N=5 => 2+3

/**
 * Fibonacci function
 * @param {number} n
 * @returns {number}
 */
export default function fibonacci(n: number): number {
  if (n === 0) return 0;
  if (n < 2) return 1;

  let res = 0;
  res = fibonacci(n - 1) + fibonacci(n - 2);
  return res;
}
