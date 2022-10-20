// Дана строка из английский букв, в которой может встречаться символ #, означающий backspace. Необходимо вывести строку после выполнения всех backspace
export const stringStack = (str) => {
  const result = [];
  const backspaceKey = '#';

  for(let i = 0; i < str.length; ++i) {
    const item = str[i];
    if(item !== backspaceKey) {
      result.push(item);
    } else {
      result.pop(item);
    }
  }

  return result.join('');
};
