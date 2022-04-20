'use strict';

console.clear();

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  arr.reduce((pre, cur, index) => {
    console.log(pre, cur, index);

    return cur;
  }, 0);
  return min;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 1001, 1002, 20, 30]));
