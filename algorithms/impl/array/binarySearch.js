export const binarySearch = (
  array,
  item,
  l = 0,
  r = array.length
) => {
  let currentR = r;

  while(r >= l) {
    currentR = Math.floor((l + r) / 2);

    if(array[currentR] === item) {
      return currentR;
    }

    if(array[currentR] > item) {
      r = currentR - 1;
    } else {
      l = currentR + 1;
    }
  }

  return -1;
}
