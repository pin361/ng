// O(n + m)
// n - number of vertices
// m - number of links
export const dfsList = (
  graph,
  visited = [],
  vertex = 0,
  result = []
) => {
  visited[vertex] = 1;

  result.push(vertex);

  const adjacents = graph[vertex];
  for(let i = 0; i < adjacents.length; ++i) {
    const adjacentVertex = adjacents[i];
    if(visited[adjacentVertex] !== 1) {
      dfsList(
        graph,
        visited,
        adjacentVertex,
        result
      );
    }
  }

  return result;
};
