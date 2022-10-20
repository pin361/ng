// O(n  ^ 2)
export const bubbleSort = (array) => {
  let length = array.length;

  while(length > 0) {
    for(let i = 0; i < length - 1; ++i) {
      if(array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }

    --length;
  }
};
