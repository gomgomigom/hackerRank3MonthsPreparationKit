'use strict';

function countingSort(arr) {
  const arrMax = Math.max(...arr);
  const result = new Array(Math.max(...arr)).fill(0);
  for (let i = 0; i < arr.length; i++) {}

  console.log(arr);
  // Write your code here
  return result;
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));
