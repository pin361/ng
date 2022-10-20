// The minimal distance (MD) is a BFS algorithm with minimal changes
// for the visited (distances) array
// O(n * (n + m)) - if we want to know MD for each vertex
// n - number of vertices
// m - number of links
const minimalDistanceBfs = (graph, startVertex, distances) => {
  const toVisit = [startVertex];

  distances.fill(-1);
  distances[startVertex] = 0;

  while(toVisit.length) {
    const currentVertex = toVisit.shift();
    const adjVertices = graph[currentVertex];

    for(let i = 0; i < adjVertices.length; ++i) {
      const adjVertex = adjVertices[i];
      if(distances[adjVertex] === -1) {
        distances[adjVertex] = distances[currentVertex] + 1;
        toVisit.push(adjVertex);
      }
    }
  }
}

export const minimalDistance = (graph) => {
  const distances = [];

  for(let vertex = 0; vertex < graph.length; ++vertex) {
    distances[vertex] = new Array(graph.length);
    minimalDistanceBfs(graph, vertex, distances[vertex]);
  }

  return distances;
};
