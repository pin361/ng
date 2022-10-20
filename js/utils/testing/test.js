import flatten from "../flatten.js";

const printName = (testName) => {
  console.log(`Test ${testName}`);
};

const printPassed = () => {
  console.log('\x1b[32m%s\x1b[0m', 'PASSED');
};

const printFailed = (trailer) => {
  const failedStr = trailer
    ? `FAILED, ${trailer}`
    : 'FAILED';

  console.log('\x1b[31m%s\x1b[0m', failedStr);
};

export const test = {
  equal(testName, result, expected) {
    printName(testName);

    if(result === expected) {
      printPassed();
    } else {
      printFailed(`expected: ${expected}, result: ${result}`);
    }
  },
  equalArray(testName, result, expected) {
    printName(testName);

    const printArrays = () => {
      console.log('result', result);
      console.log('expected', expected);
    };

    const flatResult = flatten(result);
    const flatExpect = flatten(expected);

    let errors = [];

    if(flatResult.length !== flatExpect.length) {
      printFailed(`result length (${flatResult.length}) !== expected length (${flatExpect.length})`);
      printArrays();
      return;
    }

    for(let i = 0; i < flatResult.length; ++i) {
      if(flatResult[i] !== flatExpect[i]) {
        errors.push({ result: flatResult[i], expected: flatExpect[i] });
      }
    }

    if(!errors.length) {
      printPassed();
    } else {
      printFailed('result: expected');
      errors.forEach(({ result, expected }) => {
        console.log(`${expected}: ${result}`);
      });
      printArrays();
    }
  }
};
