// O(n ^ 2)
// n - number of vertices
const dfsMatrixCore = (graph, visited, vertex, result) => {
  visited[vertex] = 1;

  result.push(vertex);

  const vertices = graph[vertex];
  for(let i = 0; i < vertices.length; ++i) {
    if(vertices[i] === 1 && visited[i] !== 1) {
      dfsMatrixCore(graph, visited, i, result);
    }
  }
};

export const dfsMatrix = (graph) => {
  const result = [];

  dfsMatrixCore(graph, [], 0, result);

  return result;
};
