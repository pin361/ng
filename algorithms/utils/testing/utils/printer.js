class Printer {
  printName(testName) {
    console.log(`Test ${testName}`);
  }

  printPassed() {
    console.log('\x1b[32m%s\x1b[0m', 'PASSED');
  }

  printFailed(trailer) {
    const failedStr = trailer
      ? `FAILED, ${trailer}`
      : 'FAILED';

    console.log('\x1b[31m%s\x1b[0m', failedStr);
  }
}

const printer = new Printer();

export default printer;
