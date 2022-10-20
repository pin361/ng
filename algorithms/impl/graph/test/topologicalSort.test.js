import { test } from '../../../utils/testing/test.js';
import { topologicalSort } from "../topologicalSort.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Topological sort (DFS)',
  topologicalSort(data.topologicalSort),
  expected.topologicalSort,
);
