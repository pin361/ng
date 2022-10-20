// This function is not optimal special for the learning aims.
export const fibonacci = (
  num: number
): number => {
  console.log('call fibonacci');
  return (num <= 2)
    ? 1
    : 2 * num - 3;
}
