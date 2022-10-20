import { test } from '../../../utils/testing/test.js';
import { dfsMatrix } from "../dfsMatrix.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Graph DFS (adjacent matrix)',
  dfsMatrix(data.adjMatrix),
  expected.dfs,
);
