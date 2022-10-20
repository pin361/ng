export const mergeSorted = (arr1, arr2) => {
  const length1 = arr1.length;
  const length2 = arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  const result = new Array(length1 + length2);

  while(i < length1 && j < length2) {
    if(arr1[i] > arr2[j]) {
      result[k++] = arr2[j++];
    }  else {
      result[k++] = arr1[i++];
    }
  }

  while(i < length1) {
    result[k++] = arr1[i++];
  }

  while(j < length2) {
    result[k++] = arr2[j++];
  }

  return result;
};
