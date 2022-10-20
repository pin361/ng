import { test } from '../../../utils/testing/test.js';
import { connectedComponents } from "../connectedComponents.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Unconnected graph (DFS)',
  connectedComponents(data.unconnectedList),
  expected.unconnectedList,
);
