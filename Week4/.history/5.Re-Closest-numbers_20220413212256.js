'use strict';

console.clear();

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let min = Number.MAX_VALUE;
  arr.reduce((pre, cur) => {
    const delta = cur - pre;
  });
}
console.log('testCase1👇');
closestNumbers([-5, 15, 25, 71, 63]);
console.log('------------------------------');
console.log('testCase2👇');
closestNumbers([5, 4, 3, 2]);
