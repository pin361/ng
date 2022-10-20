// O(2 * n * (r - l))
export const sumInRange = (arr, l, r) => {
  const map = {};
  let result = 0;

  for(let i = 0; i < arr.length; ++i) {
    const item = arr[i];
    for(let j = l; j <= r; ++j) {
      const sub = j - item;
      map[sub] = i;
    }
  }

  for(let i = 0; i < arr.length; ++i) {
    if(map[arr[i]] >= 0) {
      ++result;
    }
  }

  return result;
}

console.log(sumInRange([2, 3, 4], 5, 7));
