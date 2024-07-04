import Queue from "./queue-list";

export type WeightedAdjacencyMatrix = number[][];
export default class GraphMatrix {
  adjacencyMatrix: WeightedAdjacencyMatrix;

  constructor(data: WeightedAdjacencyMatrix) {
    this.adjacencyMatrix = data;
  }

  bfs(source: number, destination: number): number[] | null {
    const seen = Array(this.adjacencyMatrix.length).fill(false);
    const prev = Array(this.adjacencyMatrix.length).fill(-1);
    const res: ReturnType<typeof this.bfs> = [];
    seen[source] = true;
    const q = new Queue();
    q.enqueue(source);

    while (!q.isEmpty()) {
      const s = q.dequeue() as number;

      const edge = this.adjacencyMatrix[s];

      for (let i = 0; i < edge.length; i++) {
        // if node is adjacent, if seen continue
        if (seen[i] || edge[i] === 0) {
          continue;
        }
        seen[i] = true;
        prev[i] = s;
        q.enqueue(i);
      }
    }
    // lets build a path from prev
    let tmp = destination;
    // check that a path exists
    if (prev[destination] === -1) {
      return null;
    }
    while (tmp !== source) {
      res.push(tmp);
      tmp = prev[tmp];
    }
    res.push(source);
    return res.reverse();
  }
}
