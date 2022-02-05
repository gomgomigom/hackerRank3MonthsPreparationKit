'use strict';

function twoArrays(k, A, B) {
  const permutingA = A.sort((next, pre) => next - pre);
  const permutingB = B.sort((next, pre) => pre - next);
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    permutingA[i] + permutingB[i] >= k ? count++ : count;
  }
  if (count === A.length) {
    return 'YES';
  } else {
    return 'NO';
  }
}
const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];

const k2 = 5;
const A2 = [1, 2, 2, 1];
const B2 = [...'3334'];

console.log(twoArrays(k, A, B));
console.log(twoArrays(k2, A2, B2));
