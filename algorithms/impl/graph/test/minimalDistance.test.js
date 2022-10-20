import { test } from '../../../utils/testing/test.js';
import { minimalDistance } from "../minimalDistance.js";
import { data, expected } from "./data.js";

test.equalArray(
  'Minimal distance (BFS)',
  minimalDistance(data.minimalDistance),
  expected.minimalDistances,
);
