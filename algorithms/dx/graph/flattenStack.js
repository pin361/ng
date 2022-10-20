// Необходимо реализовать функцию flatten, которая принимает на вход массив,
// и возвращает новый - такой, что все элементы всех вложенных массивов были подняты наверх
export const flattenStack = (arr) => {
  const result = [];
  const stack = [...arr];

  while(stack.length) {
    const item = stack.pop();
    if(Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}
