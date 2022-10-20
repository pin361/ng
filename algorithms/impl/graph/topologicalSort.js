const topologicalSortCore = (
  graph,
  visited = [],
  currentVertex = 0,
  order = [],
) => {
  visited[currentVertex] = 1;

  const adjacents = graph[currentVertex];
  for(let i = 0; i < adjacents.length; ++i) {
    const adjacentVertex = adjacents[i];
    if(visited[adjacentVertex] !== 1) {
      topologicalSortCore(
        graph,
        visited,
        adjacentVertex,
        order
      );
    }
  }

  order.push(currentVertex);
};

export const topologicalSort = (graph) => {
  const visited = [];
  const order = [];

  for(let vertex = 0; vertex < graph.length; ++vertex) {
    if(!visited[vertex]) {
      topologicalSortCore(graph, visited, vertex, order);
    }
  }

  order.reverse();

  return order;
};
