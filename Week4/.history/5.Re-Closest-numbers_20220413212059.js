'use strict';

console.clear();

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let min = Number.MAX_VALUE;
}
console.log('testCase1👇');
closestNumbers([-5, 15, 25, 71, 63]);

console.log(\n'testCase2👇');
closestNumbers([5, 4, 3, 2]);
