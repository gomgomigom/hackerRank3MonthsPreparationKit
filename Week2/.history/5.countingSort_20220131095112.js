'use strict';

function countingSort(arr) {
  const result = new Array(Math.max(...arr)).fill(0);
  console.log(arr);
  // Write your code here
  return result;
}

const arr = [1, 1, 3, 2, 1];
const arr2 = [...arr];
console.log(countingSort(arr));

console.log(`그냥: ${arr}, ...: ${arr2}`);
