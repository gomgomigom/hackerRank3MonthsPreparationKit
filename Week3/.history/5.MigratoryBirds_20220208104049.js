'use strict';

function migratoryBirds(arr) {
  let countingSort = new Array(Math.max(...arr) + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countingSort[arr[i]]++;
  }
  const answer = countingSort.indexOf(Math.max(...countingSort));
  return answer;

  // Write your code here
}

const arr = [1, 4, 4, 4, 5, 3];

console.log(migratoryBirds(arr));
