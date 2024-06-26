import Graph from "../graph";

const edges = [
  [0, 1],
  [0, 3],
  [0, 2],
  [0, 4],
  [4, 5],
  [4, 6],
  [6, 7],
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
});
