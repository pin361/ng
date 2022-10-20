import { test } from '../../../utils/testing/test.js';
import { bfsMatrix } from "../bfsMatrix.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Graph BFS (adjacent matrix)',
  bfsMatrix(data.adjMatrix),
  expected.bfs,
);
