import Queue from "./queue-list";

export default class Graph {
  vertexCount: number;
  edgeMap: Map<string, boolean>;

  constructor(edges: number[][]) {
    this.vertexCount = this.calcVertexCount(edges);
    this.edgeMap = new Map<string, boolean>();
    edges.map((edge) => {
      const key = edge.join(",");
      this.edgeMap.set(key, true);
    });
  }
  /**
   * Perform a depth first search with start vertex, end vertex as parameters
   */
  depthFirstSearch(startV: number, endV: number): number[] {
    let res: ReturnType<typeof this.depthFirstSearch> = [];
    const explored = new Set<number>();
    // base case
    if (startV === endV) {
      res.push(startV);
      return res;
    }
    explored.add(startV);
    for (let i = 0; i < this.vertexCount; i++) {
      if (!explored.has(i) && this.isConnected(startV, i)) {
        res = this.depthFirstSearch(i, endV);
        if (res.length > 0) {
          res.unshift(startV);
          return res;
        }
      }
    }
    return res;
  }
  /*
   * Perform a breadth first search using v1 as the start vertex, and v2 as the goal vertex
   */
  breadthFirstSearch(v1: number, v2: number): number[] {
    const q = new Queue<number>();
    const childToParentMapping = new Map<number, number>(); // child, parent
    const explored = new Set<number>();
    const res: ReturnType<typeof this.breadthFirstSearch> = [];

    q.enqueue(v1);
    while (!q.isEmpty()) {
      //push value from q
      const v = q.dequeue()!;
      for (let i = 0; i < this.vertexCount; i++) {
        if (!this.isConnected(v, i) || explored.has(i)) {
          continue;
        }
        explored.add(i);
        childToParentMapping.set(i, v);
        q.enqueue(i);
      }
    }
    //retrace the path from mapping
    let tmp = v2;
    while (tmp !== v1) {
      tmp = childToParentMapping.get(tmp) as number;
      res.push(tmp);
    }
    res.unshift(v2);
    // start the path from the beginning
    return res.reverse();
  }

  private isConnected(v1: number, v2: number): boolean {
    // return true, if not return false
    return this.edgeMap.get(`${v1},${v2}`) || false;
  }

  private calcVertexCount(edges: number[][]): number {
    const s = new Set();
    for (const edge of edges) {
      edge.map((v) => {
        s.add(v);
      });
    }
    return s.size;
  }
}
