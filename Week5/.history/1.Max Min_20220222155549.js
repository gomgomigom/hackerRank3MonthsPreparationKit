'use strict';

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  // Write your code here
}

const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;

console.log(maxMin(k, arr));
