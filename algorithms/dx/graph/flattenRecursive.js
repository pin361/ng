// Необходимо реализовать функцию flatten, которая принимает на вход массив,
// и возвращает новый - такой, что все элементы всех вложенных массивов были подняты наверх
export const flattenRecursive = (arr) => {
  let index = 0;
  const result = [];

  while(index < arr.length) {
    const item = arr[index];
    if(Array.isArray(item)) {
      const flatChild = flattenRecursive(item);
      result.push(...flatChild);
    } else {
      result.push(item);
    }
    ++index;
  };

  return result;
};
