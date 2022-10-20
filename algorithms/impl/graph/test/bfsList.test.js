import { test } from '../../../utils/testing/test.js';
import { bfsList } from "../bfsList.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Graph BFS (adjacent list)',
  bfsList(data.adjList),
  expected.bfs,
);
