export const iterateList = (list, callback) => {
  let node = list;

  while (node) {
    callback(node);
    node = node.next;
  }
};

export const printLinkedList = (list, description) => {
  console.log(`${description}:`);

  iterateList(list, ({ val }) => console.log(val));
};

export const createLinkedList = (array) => {
  const result = {};
  let current = result;

  array.forEach((val, index) => {
    if (index === 0) {
      current.val = val;
      current.next = null;
    } else {
      const node = {
        val,
        next: null
      };

      current.next = node;
      current = node;
    }
  });

  printLinkedList(result, 'list');

  return result;
};

export const getListLength = (list) => {
  let result = 0;
  let current = list;

  while(current) {
    current = current.next;
    ++result;
  }

  return result;
};
