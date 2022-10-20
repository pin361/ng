import { findMaxIndex } from '../utils/findMaxIndex.js';
import { swap } from '../utils/swap.js';

// O(n ^ 2)
export const selectionSort = (array) => {
  let length = array.length;
  let maxIndex = -1;

  while(length > 0) {
    maxIndex = findMaxIndex(array, length);

    swap(array, length - 1, maxIndex);

    --length;
  }
};
