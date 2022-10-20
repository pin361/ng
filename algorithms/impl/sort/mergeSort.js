// O(n + m)
const merge = (array, left, right, last) => {
  const result = [];
  const rightLength = right + 1;
  const fullLength = last + 1;
  let i = left;
  let j = right + 1;

  while(i !== rightLength && j != fullLength) {
    if(array[i] > array[j]) {
      result.push(array[j]);
      ++j;
    } else {
      result.push(array[i]);
      ++i;
    }
  }

  while(i !== rightLength) {
    result.push(array[i]);
    ++i;
  }

  while(j !== fullLength) {
    result.push(array[j]);
    ++j;
  }

  for(let i = left; i < fullLength; ++i) {
    array[i] = result[i - left];
  }
};

// Merge sort is a fast and optimal sort algorithm
// O(n) = n * log(n)
// + fast and may sort big arrays
// - additional memory and slow performance for little lenght of splitted arrays (10-20 items)
// Optimization - using the 'insertion sort' for the little arrays may increase performance up to 2 times
export const mergeSort = (array, from, to) => {
  const leftIndex = from ?? 0;
  const lastIndex = to ?? array.length - 1;
  const rightIndex = leftIndex + Math.floor((lastIndex - leftIndex) / 2);

  if ((lastIndex - leftIndex) > 0) {
    mergeSort(array, leftIndex, rightIndex);
    mergeSort(array, rightIndex + 1, lastIndex);

    merge(array, leftIndex, rightIndex, lastIndex);
  }
};
