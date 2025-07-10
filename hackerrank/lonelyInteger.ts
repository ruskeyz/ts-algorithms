/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
  // create a hashmap of occurrences
  // Record<number, number>
  const dict: Record<number, number> = {};

  for (let i = 0; i < a.length; i++) {
    let currValue = a[i];
    if (!dict[currValue]) {
      dict[currValue] = 1;
    } else {
      dict[currValue] += 1;
    }
  }

  const resultArr = Object.keys(dict);
  const idx = Object.values(dict).findIndex((i) => i === 1);

  return Number(resultArr[idx]);
}

console.log(lonelyinteger([0, 0, 1, 2, 1]));
