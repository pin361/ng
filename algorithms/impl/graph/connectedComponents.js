import { dfsList } from './dfsList.js';

export const connectedComponents = (graph) => {
  const visited = [];
  const result = [];

  for(let vertex = 0; vertex < graph.length; ++vertex) {
    if(!visited[vertex]) {
      result.push(dfsList(graph, visited, vertex));
    }
  }

  return result;
};
