//2nx2xn matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. Goal: maximise the sum of the upper left quadrant of the matrix.

function flippingMatrix(matrix: number[][]): number {
  // calculate len
  let rows = matrix.length;
  let cols = matrix[0].length;
  let upperB = Math.ceil(rows / 2);
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ]),
);
