// GCD - Grand common divider - Euclidian algorithm
// https://www.udemy.com/course/algorithms-and-data-structure/learn/lecture/26307510#overview
export const gcd = (n1, n2) => {
  let a = n1;
  let b = n2;
  let temp;

  while(b !== 0) {
    temp = a;
    a = b;
    b = temp % b;
  }

  return a;
}
