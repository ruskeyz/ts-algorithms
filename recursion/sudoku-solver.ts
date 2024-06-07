const possible = (
  y: number,
  x: number,
  n: number,
  board: string[][],
): boolean => {
  // 1. From row x 0-8
  for (let i = 0; i < 9; i++) {
    if (board[y][i] === n.toString()) {
      return false;
    }
  }
  // 2. From column y 0-8
  for (let i = 0; i < 9; i++) {
    if (board[i][x] === n.toString()) {
      return false;
    }
  }
  let y0 = Math.floor(y / 3) * 3;
  let x0 = Math.floor(x / 3) * 3;
  // 3. Check number in 3x3
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[y0 + i][x0 + j] === n.toString()) {
        return false;
      }
    }
  }
  return true;
};

export default function solveSudoku(board: string[][]) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === ".") {
        for (let i = 1; i < 10; i++) {
          if (possible(y, x, i, board)) {
            board[y][x] = i.toString();
            const result = solveSudoku(board);
            if (result) {
              return result;
            }
            board[y][x] = ".";
          }
        }
        return null;
      }
    }
  }
  return board;
}
