'use strict';

function countingSort(arr) {
  const arrMax = Math.max(...arr);
  const result = new Array(arrMax).fill(0);
  for (let i = 0; i <= arrMax; i++) {}
  console.log(arr);
  return result;
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));
