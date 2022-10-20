import printer from './utils/printer.js';
import flatten from "../flatten.js";

export const test = {
  equal(testName, result, expected) {
    printName(testName);

    if(result === expected) {
      printer.printPassed();
    } else {
      printer.printFailed(`expected: ${expected}, result: ${result}`);
    }
  },
  equalArray(testName, result, expected) {
    printer.printName(testName);

    const printArrays = () => {
      console.log('result', result);
      console.log('expected', expected);
    };

    const flatResult = flatten(result);
    const flatExpect = flatten(expected);

    let errors = [];

    if(flatResult.length !== flatExpect.length) {
      printer.printFailed(`result length (${flatResult.length}) !== expected length (${flatExpect.length})`);
      printArrays();
      return;
    }

    for(let i = 0; i < flatResult.length; ++i) {
      if(flatResult[i] !== flatExpect[i]) {
        errors.push({ result: flatResult[i], expected: flatExpect[i] });
      }
    }

    if(!errors.length) {
      printer.printPassed();
    } else {
      printer.printFailed('result: expected');
      errors.forEach(({ result, expected }) => {
        console.log(`${expected}: ${result}`);
      });
      printArrays();
    }
  }
};
