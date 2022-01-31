'use strict';

function countingSort(arr) {
  const arrMax = Math.max(...arr);
  const result = new Array(arrMax + 1).fill(0);
  for (let num of arr) {
    result[num]++;
  }
  return result;
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr));
