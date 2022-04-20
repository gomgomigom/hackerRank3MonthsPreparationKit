'use strict';

console.clear();

function maxMin(k, arr) {
  console.log(k, arr);
  arr.sort((a, b) => a - b);
  // Write your code here
}

console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
