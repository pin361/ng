import { findMaxIndex } from "../utils/findMaxIndex.js";

// O(n + d), whare d is a maxValue in array
// + fastest sort
// - memory consumption is too big for the common using this algorithm
export const countSort = (array) => {
  const maxIndex = findMaxIndex(array, array.length);
  const maxValue = array[maxIndex];
  const counts = new Array(maxValue + 1)
    .fill(0);

  for(let i = 0; i < array.length; ++i) {
    const item = array[i];
    ++counts[item];
  }

  let arrayIndex = 0;
  for(let item = 0; item < counts.length; ++item) {
    for(let j = 0; j < counts[item]; ++j) {
      array[arrayIndex++] = item;
    }
  }
};
