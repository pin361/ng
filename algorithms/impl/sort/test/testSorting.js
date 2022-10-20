import { generateArray } from '../../data/generateArray.js';

export const testSorting = (sortCallback, name, array) => {
  const array2sort = array ?? generateArray(1147);
  const inputArray0 = [...array2sort];
  const inputArray1 = [...array2sort];

  console.log(`Test ${name}`);

  inputArray0.sort((a, b) => a > b ? 1 : -1);

  sortCallback(inputArray1);

  const difference = inputArray0.filter((value, index) => inputArray1[index] !== value);

  if(difference.length > 0) {
    console.log('\x1b[31m%s\x1b[0m', 'FAILED, difference', difference);
  } else {
    console.log('\x1b[32m%s\x1b[0m', 'PASSED');
  }
}
