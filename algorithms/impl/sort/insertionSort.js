import { swap } from '../utils/swap.js';

// O(n) = n ^ 2
export const insertionSort = (array) => {
  let lastIndex = 1;

  while(lastIndex < array.length) {
    let index = lastIndex;
    for(let i = lastIndex - 1; i > -1; --i) {
      if(array[index] < array[i]) {

        swap(array, i, index);

        index = i;
      }
    }

    ++lastIndex;
  };
};
