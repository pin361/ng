import { data } from '../../data/data.js';

export const testPerformance = (arrayLengths, callback, name) => {
  const result = [];

  console.log('\x1b[33m%s\x1b[0m', `${name}`);

  const test = (count) => {
    const time = Date.now();

    callback(data[`arr_${count}`]);

    const diff = Date.now() - time;

    result.push(diff);
  };

  arrayLengths.forEach((length) => {
    test(length);
  });

  return result;
};
