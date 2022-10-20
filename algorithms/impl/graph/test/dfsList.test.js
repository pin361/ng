import { test } from '../../../utils/testing/test.js';
import { dfsList } from "../dfsList.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Graph DFS (adjacent list)',
  dfsList(data.adjList),
  expected.dfs,
);
