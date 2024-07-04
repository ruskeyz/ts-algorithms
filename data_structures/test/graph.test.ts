import Graph from "../graph";
import GraphMatrix, { WeightedAdjacencyMatrix } from "../graphMatrix";
import GraphW, { WeightedAdjacencyList } from "../graphW";

const edges = [
  [0, 1],
  [0, 3],
  [0, 2],
  [0, 4],
  [4, 5],
  [4, 6],
  [6, 7],
];
const list2: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
list2[1] = [{ to: 4, weight: 1 }];
list2[2] = [{ to: 3, weight: 7 }];
list2[3] = [];
list2[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
list2[5] = [
  { to: 2, weight: 18 },
  { to: 6, weight: 1 },
];
list2[6] = [{ to: 3, weight: 1 }];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
export const matrix: WeightedAdjacencyMatrix = [
  [0, 3, 1, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 1, 0, 0], // 1
  [0, 0, 7, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0, 0], // 3
  [0, 1, 0, 5, 0, 2, 0], // 4
  [0, 0, 18, 0, 0, 0, 1], //5
  [0, 0, 0, 1, 0, 0, 1], // 6
];

describe("Graph", () => {
  test("it implements a graph", () => {
    const pass = {
      "0,1": true,
      "0,3": true,
      "0,2": true,
      "0,4": true,
      "4,5": true,
      "4,6": true,
      "6,7": true,
    };
    const objectToMap = new Map(Object.entries(pass));
    const g = new Graph(edges);
    expect(g.edgeMap).toStrictEqual(objectToMap);
  });
  test("it performs a BFS search", () => {
    const g = new Graph(edges);
    expect(g.breadthFirstSearch(0, 7)).toStrictEqual([0, 4, 6, 7]);
  });
  test("it performs a DFS search", () => {
    const g = new Graph(edges);
    expect(g.depthFirstSearch(0, 7)).toStrictEqual([0, 4, 6, 7]);
  });
  test("it implements a weighted graph BFS", () => {
    const g = new GraphW(list2);
    expect(g.bfs(0, 6)).toStrictEqual({ path: [0, 1, 4, 5, 6], dist: 7 });
    expect(g.bfs(6, 0)).toEqual(null);
  });
  test("It implements breadth first search on a graph matrix", () => {
    const g = new GraphMatrix(matrix);

    expect(g.bfs(0, 6)).toEqual([0, 1, 4, 5, 6]);
    expect(g.bfs(6, 0)).toEqual(null);
  });
});
