'use strict';

function closestNumbers(arr) {
  let result;
  let min = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    Math.abs(arr[i] - arr[i+1] ;
  }
  return result;
}

const arr = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
];

const arr2 = [5, 4, 3, 2];

console.log(closestNumbers(arr));
console.log(closestNumbers(arr2));
