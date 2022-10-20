import { generateArray } from '../../../data/generateArray.js'
import { mergeSorted } from '../mergeSorted.js';
import { test } from '../../../utils/testing/test.js';

const testMergeSorted = () => {
  const arr1 = generateArray(130)
    .sort((a, b) => a - b);
  const arr2 = generateArray(293)
    .sort((a, b) => a - b);

  const result = mergeSorted(arr1, arr2);
  const expected = [
    ...arr1,
    ...arr2
  ].sort((a, b) => a - b);

  test.equalArray(
    'testMergeSorted',
    result,
    expected,
  );
};

testMergeSorted();
