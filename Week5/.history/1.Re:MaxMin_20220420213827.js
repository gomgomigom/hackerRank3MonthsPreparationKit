'use strict';

console.clear();

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  const delta = [];
  arr.reduce((pre, cur) => {
    delta.push(Math.abs(pre - cur));
    return cur;
  });
  for (let i = 0; i < delta.length - k; i++) {}

  return delta;
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 1001, 1002, 20, 30]));
