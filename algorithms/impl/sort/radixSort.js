const createBucket = () => {
  const bucket = new Array(10)
    .fill(null);
  bucket.forEach((_, index) => {
    bucket[index] = [];
  });

  return bucket;
}

const populateBucket = (array, bucket) => {
  let itemIndex = 0;
  bucket.forEach((items, index) => {
    items.forEach((item) => {
      array[itemIndex] = item;
      ++itemIndex;
    });
    bucket[index] = [];
  });
}

// O(d * n), where d - is the item amount in the element
// Can sort only elements which we can split by items
export const radixSort = (array) => {
  const bucket = createBucket();

  for(let j = array[0].length - 1; j >= 0; --j) {
    for(let i = 0; i < array.length; ++i) {
      const item = array[i];
      let bucketIndex = parseInt(item[j]);
      bucket[bucketIndex]
        .push(item);
    }

    populateBucket(array, decade);
  }
}

const array = ['123', '230', '576', '999', '277', '233'];

console.log('input', array);

radixSort(array);

console.log('output', array);
