'use strict';

function countingSort(arr) {
  const result = new Array(Math.max(...arr)).fill(0);
  console.log(arr);
  // Write your code here
  return result;
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));

const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, arr2);
console.log(arr1); // [1, 2, 3, 4]
