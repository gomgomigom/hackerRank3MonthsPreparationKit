'use strict';

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length - 1; i++) {
    min = Math.min(Math.abs(arr[i] - arr[i + 1]), min);
  }
  return min;
}

const arr = [3, -7, 0];

console.log(minimumAbsoluteDifference(arr));
