'use strict';

console.clear();

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length - k; i++) {
    min = Math.min(arr[i + k - 1] - arr[i], min);
  }

  return;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 1001, 1002, 20, 30]));
