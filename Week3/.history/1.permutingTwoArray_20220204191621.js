'use strict';

function twoArrays(k, A, B) {
  const permutingA = A.sort(a, (b) => b - a);
  console.log(`k: ${k}, A: ${A}, B: ${B}`);
  // Write your code here
}
const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];

const k2 = 5;
const A2 = [1, 2, 2, 1];
const B2 = [...'3334'];

console.log(twoArrays(k, A, B));
console.log(twoArrays(k2, A2, B2));
