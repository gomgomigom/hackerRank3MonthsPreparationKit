'use strict';

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let deltaMin = Number.MAX_VALUE;
  for (let i = 0; i < arr.length - (k - 1); i++) {
    for (let j = i + (k - 1); j < arr.length; j++) {
      deltaMin = Math.min(Math.abs(arr[i] - arr[j]), deltaMin);
    }
  }
  return deltaMin;
}

const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;

console.log(maxMin(k, arr));
