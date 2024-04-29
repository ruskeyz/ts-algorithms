export interface Point {
  x: number;
  y: number;
}
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base case
  // 1. off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3 steps recursion
  // pre condition
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // recurse
  for (let index = 0; index < dir.length; index++) {
    const [x, y] = dir[index];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }
  // post
  path.pop();

  return false;
}

export default function mazeSolver(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, wall, start, end, seen, path);

  return path;
}
