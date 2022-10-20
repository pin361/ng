import { test } from '../../utils/testing/test.js';
import { flattenStack } from "./flattenStack.js";
import { flattenRecursive } from "./flattenRecursive.js";
import { flattenReduceRecursive } from "./flattenReduceRecursive.js";

const testData = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const expected = testData.flat(10);

test.equalArray(
  'Flatten stack',
  flattenStack(testData),
  expected
);

test.equalArray(
  'Flatten recursive',
  flattenRecursive(testData),
  expected
);

test.equalArray(
  'Flatten reduce recursive',
  flattenReduceRecursive(testData),
  expected
);
