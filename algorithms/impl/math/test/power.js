import { powRecursive, pow } from '../power.js';

const testPower = () => {
  console.log('pow(23 ^ 7)', pow(23, 7) === 3404825447);
  console.log('pow(13 ^ 5)', pow(13, 5) === 371293);
  console.log('pow(2 ^ 15)', pow(2, 15) === 32768);
  console.log('powRecursive(23 ^ 7)', powRecursive(23, 7) === 3404825447);
  console.log('powRecursive(13 ^ 5)', powRecursive(13, 5) === 371293);
  console.log('powRecursive(2 ^ 15)', powRecursive(2, 15) === 32768);
};

testPower();
