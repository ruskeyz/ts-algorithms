import Queue from "./queue-list";

type GraphEdge = {
  to: number;
  weight: number;
};
export type WeightedAdjacencyList = GraphEdge[][];

/*
 * Implement a weighted graph with BFS and Dijkstra's Shortest Path
 * @params: WeightedAdjacencyList
 */
export default class GraphW {
  adjacencyList: WeightedAdjacencyList;
  constructor(data: WeightedAdjacencyList) {
    this.adjacencyList = data;
  }
  bfs(
    source: number,
    destination: number,
  ): { path: number[]; dist: number } | null {
    const seen = Array(this.adjacencyList.length).fill(false);
    const prev = Array(this.adjacencyList.length).fill(-1);
    const dists = Array(this.adjacencyList.length).fill(Infinity);
    seen[source] = true;
    dists[source] = 0;
    let res: number[] = [];
    const q = new Queue();

    q.enqueue(source);
    while (!q.isEmpty()) {
      const u = q.dequeue() as number;
      const edges = this.adjacencyList[u];
      for (let i = 0; i < edges.length; i++) {
        const v = edges[i].to;
        if (seen[v]) {
          continue;
        }
        seen[v] = true;
        prev[v] = u;
        dists[v] = dists[u] + edges[i].weight;
        q.enqueue(v);
      }
    }

    // lets build a path from prev
    let tmp = destination;
    // check there is a path
    if (prev[destination] === -1) {
      return null;
    }
    while (tmp !== source) {
      res.push(tmp);
      tmp = prev[tmp];
    }
    res.push(source);

    let path = res.reverse();
    //return path and distance weight (Dijkstra's Shortest Path)
    return { path, dist: dists[destination] };
  }
}
