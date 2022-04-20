'use strict';

console.clear();

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  arr.reduce((pre, cur, index) => {
    console.log(pre, cur, index);
  }, 0);
  return arr[k - 1] - arr[0];
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 1001, 1002, 20, 30]));
