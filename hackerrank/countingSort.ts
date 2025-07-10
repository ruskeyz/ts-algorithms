/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
  // create an empty array with 100 values
  let counted = new Array(100).fill(0);
  // iterate over input, use the value from input as key and increment the value
  for (let i = 0; i < arr.length; i++) {
    counted[arr[i]] += 1;
  }
  // loop over created, put keys with values, over 0; decrement value if >1?
  let res: number[] = [];
  for (let i = 0; i < counted.length; i++) {
    // if 0; ignore
    if (counted[i] === 0) {
      continue;
    } else if (counted[i] > 1) {
      // if multiple values-> create an array with length of values and values of key and push
      let temp: number[] = new Array(counted[i]).fill(i);
      res.push(...temp);
    } else {
      // if >0; push key and decrement the value!
      res.push(i);
      counted[i]--;
    }
  }
  return res;
}

console.log(countingSort([1, 1, 3, 2, 1]));
