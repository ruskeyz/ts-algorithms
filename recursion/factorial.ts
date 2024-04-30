//Write two functions that finds the factorial 4! = 4 x 3 x 2 x 1

/**
 * Factorial function that finds the factorial of any number
 * @param {number} n
 * @returns {number}
 */
export default function factorial(n: number): number {
  let res = 0;

  if (n === 1) return 1;
  res = n * factorial(n - 1);

  return res;
}
