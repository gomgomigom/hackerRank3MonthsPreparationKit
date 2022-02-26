'use strict';

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let deltaMin = Number.MAX_VALUE;
  for (let i of arr) {
    console.log(i);
  }
  return arr;
}

const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;

console.log(maxMin(k, arr));
