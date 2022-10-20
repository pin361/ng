export const generateArray = (length) => {
  const result = [];
  const getRandom = () => Math.floor(Math.random() * 1024);

  for(let i = 0; i < length; ++i) {
    result.push(getRandom());
  }

  return result;
};
