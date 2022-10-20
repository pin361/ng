// O(n + m)
// n - number of vertices
// m - number of links
export const bfsList = (graph) => {
  const result = [];
  const startVertex = 0;
  const toVisit = [startVertex];
  const visited = [];

  visited[startVertex] = 1;

  while(toVisit.length) {
    const currentVertex = toVisit.shift();

    result.push(currentVertex);

    const adjacents = graph[currentVertex];
    for(let i = 0; i < adjacents.length; ++i) {
      const adjVertex = adjacents[i];
      if(visited[adjVertex] !== 1) {
        visited[adjVertex] = 1;
        toVisit.push(adjVertex);
      }
    }
  }

  return result;
}
