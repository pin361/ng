// Dynamic programming approach
// O(n ^ 2 * log(n))
const isPalindrom = (str) => {
  let leftIndex = 0;
  let rightIndex = 0;

  const medium = Math.floor(str.length / 2);

  while(leftIndex < medium) {
    rightIndex = (str.length - 1) - leftIndex;
    if(str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    ++leftIndex;
  }
  return true;
}

export const longestPalindrome = (s) => {
  const length = s.length;
  let result = '';
  let iteration = 0;

  while(iteration < length) {
    let index = iteration;
    while(index < length) {
      const substr = s.substring(iteration, index + 1);
      if(isPalindrom(substr) && result.length < substr.length) {
        result = substr;
      }
      ++index;
    }
    ++iteration;
  }

  return result;
};

console.log(longestPalindrome('accdcc'));
