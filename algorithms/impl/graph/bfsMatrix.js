// O(n ^ 2)
// n - number of vertices
export const bfsMatrix = (graph) => {
  const result = [];
  let startVertex = 0;
  const toVisit = [startVertex];
  const visited = [];
  visited[startVertex] = 1;

  while(toVisit.length) {
    const currentVertex = toVisit.shift();

    result.push(currentVertex);

    const adjVertices = graph[currentVertex];
    for(let adjVertex = 0; adjVertex < adjVertices.length; ++adjVertex) {
      const isConnected = adjVertices[adjVertex] === 1;
      if(isConnected && visited[adjVertex] !== 1) {
        visited[adjVertex] = 1;
        toVisit.push(adjVertex);
      }
    }
  }

  return result;
}
