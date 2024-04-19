// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previos values, N=5 => 2+3

function fibonacciIterative(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer[n];
}

function fibonacciRecursive(n) {
  //base case
  if (n == 0) return 0;
  if (n <= 2) return 1;
  let answer = 1;
  //recursive case
  answer = fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  return answer;
}

console.log(fibonacciRecursive(6));
console.log("--------");
console.log(fibonacciIterative(6));
