'use strict';

function migratoryBirds(arr) {
  let countingSort = new Array(Math.max(...arr)).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countingSort[arr[i]]++;
  }

  return countingSort;

  // Write your code here
}

const arr = [1, 4, 4, 4, 5, 3];

console.log(migratoryBirds(arr));
