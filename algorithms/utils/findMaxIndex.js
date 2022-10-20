export const findMaxIndex = (array, length) => {
  let result = 0;

  for(let i = 1; i < length; ++i) {
    result = array[result] > array[i]
      ? result
      : i;
  }

  return result;
};
