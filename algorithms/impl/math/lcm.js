// LCM - Lower common multiplicator
// https://www.udemy.com/course/algorithms-and-data-structure/learn/lecture/26307510#overview
import { gcd } from './gcd.js';

export const lcm = (a, b) => (a * b) / gcd(a, b);
