// Необходимо реализовать функцию flatten, которая принимает на вход массив,
// и возвращает новый - такой, что все элементы всех вложенных массивов были подняты наверх
export const flattenReduceRecursive = (arr) => {
  const result = [];

  arr.reduce((prev, cur) => {
    if(prev !== undefined) {
      result.push(prev);
    }

    if(Array.isArray(cur)) {
      const flatChild = flattenReduceRecursive(cur);
      result.push(...flatChild);
    } else {
      result.push(cur);
    }
  });

  return result;
};
