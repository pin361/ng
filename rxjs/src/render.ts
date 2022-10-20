const resultElement = document.getElementById('result');

export const clearResult = () => resultElement.textContent = '';

export const printResult = (item: string) => {
  console.log('item', item);
  resultElement.textContent = item;
}
