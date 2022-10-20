import { asyncFilter } from './asyncFilter.js';
import { test } from '../../utils/testing/test.js';

asyncFilter(
  [1, 2, 3, 4],
  (item) => new Promise((resolve) => resolve(item > 1))
).then((result) => {
  test.equalArray(
    'asyncFilter',
    result,
    [2, 3, 4]
  );
});
