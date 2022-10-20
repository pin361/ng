// Необходимо реализовать асинхронный метод массива filter.
// То есть, должен ли элемент массива попасть в результат, определяется вызовом асинхронного коллбека
export const asyncFilter = async (arr, asyncCallback) => {
  const promises = [];
  const result = [];

  arr.forEach((item) => {
    promises.push(
      asyncCallback(item)
        .then((condition) => {
          if(condition) {
            result.push(item);
          }
        },
        (error) => console.log(`Rejected: ${error}`))
    );
  });

  await Promise.allSettled(promises);

  return result;
};
