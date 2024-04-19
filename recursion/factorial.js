//Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.
// 4! = 4 x 3 x 2 x 1
function findFactorialRecursive(number) {
  // return the base case
  if (number < 0) return -1;
  if (number == 0) return 1;
  let answer = number * findFactorialRecursive(number - 1);
  // return the recursion
  return answer;
}

function findFactorialIterative(number) {
  if (number < 0) return -1;
  if (number == 0) return 1;
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(2));
