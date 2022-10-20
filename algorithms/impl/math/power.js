export const powRecursive = (number, n) => {
  if(n === 0) {
    return 1;
  }
  if(n % 2 === 1) {
    return powRecursive(number, n - 1) * number;
  }
  let result = powRecursive(number, n / 2);
  return result * result;
}

export const pow = (num, n) => {
  let result = 1;
  let a = num;

  while(n !== 0) {
    if(n % 2 === 1) {
      result *= a;
    }
    n >>= 1;
    a *= a;
  }

  return result;
}
