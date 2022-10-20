import { getListLength, iterateList } from './utils.js';

const printTestResult = (isValid, caption, errText) => {
  const result = isValid
    ? 'passed'
    : errText;

  console.log(caption, result);
};

const testLength = (arr1, arr2, mergedlist) => {
  const lengthMergedList = getListLength(mergedlist);
  const isEqual = (lengthMergedList === (arr1.length + arr2.length));

  printTestResult(
    isEqual,
    'testLength',
    `failed: lengthList1: ${arr1.length}, lengthList2: ${arr2.length}, lengthMergedList: ${lengthMergedList}`,
  )
};

const testCondition = (mergedlist) => {
  const array = [];
  let isValid = true;

  iterateList(
    mergedlist,
    ({ val }) => array.push(val)
  );

  array.reduce((prev, current) => {
    if(current - prev < 0) {
      isValid = false;
    }

    return current;
  });

  printTestResult(
    isValid,
    'testCondition',
    'failed: merged list is not sorted',
  )
};


export const test = (arr1, arr2, mergedlist) => {
  testLength(arr1, arr2, mergedlist);
  testCondition(mergedlist);
};
