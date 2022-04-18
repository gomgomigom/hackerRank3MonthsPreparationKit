'use strict';
console.clear();

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let min = Infinity;
  arr.reduce((pre, cur) => {
    const diff = Math.abs(cur - pre);
    min = Math.min(diff, min);
    return cur;
  });
  return min;
}

console.log('testCase1👇');
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));
console.log('------------------------------');
console.log('testCase2👇');
console.log(minimumAbsoluteDifference([3, -7, 0]));
