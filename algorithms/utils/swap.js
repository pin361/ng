export const swap = (array, index0, index1) => {
  if(index0 !== index1) {
    const temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
  }
};
