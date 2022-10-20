import { binarySearch } from '../binarySearch.js';

const testBinarySearch = () => {
  const array = [15, 20, 28, 56, 77, 90, 101, 105, 200, 246, 300];

  array.forEach((item) => {
    const itemIndex = binarySearch(array, item);
    console.log(`found ${item}`, array[itemIndex] === item);
  });

  console.log('not found 1', binarySearch(array, 1) === -1);
  console.log('not found 3000', binarySearch(array, 3000) === -1);
  console.log('not found 91', binarySearch(array, 91) === -1);
};

testBinarySearch();
