import { swap } from '../utils/swap.js';

const selectPivot = (array, i, j) => {
  let pivot = Math.floor(Math.random() * (j - 1 - i)) + i;

  swap(array, pivot, i);
  pivot = i;

  return pivot;
}

const distributePivot = (array, i, j) => {
  let s1 = i;
  let pivot = selectPivot(array, i, j);

  for(let k = i + 1; k < j; ++k) {
    if(array[k] < array[pivot]) {
      ++s1;
      swap(array, s1, k);
    }
  }

  swap(array, pivot, s1);

  pivot = s1;

  return pivot;
}

// Quick sort is an optimal sort algorithm
// O(n) = n  * log(n), if pivot is selected as random or by the specific equation.
// O(n) = n  ^ 2, if pivot is selected as the first element of the array.
// + no need using additional mamory
// + can sort big arrays
export const quickSort = (array, i = 0, j = array.length) => {
  if(i === j) {
    return ;
  }

  const pivot = distributePivot(array, i, j);

  quickSort(array, i, pivot);
  quickSort(array, pivot + 1, j);
};
