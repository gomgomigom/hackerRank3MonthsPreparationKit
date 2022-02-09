'use strict';

function migratoryBirds(arr) {
  let countingSort = new Array(6).fill(0);
  for (let i = 0; i < arr.length; i++) {
    countingSort[arr[i]]++;
  }
  const answer = countingSort.indexOf(Math.max(...countingSort));
  return answer;
}

function migratoryBirds2(arr) {
  let tally = [];
  for (let i of arr) {
    while (i > tally.length) {
      tally.push(0);
    }
    tally[i]++;
  }
  return tally.indexOf(Math.max(...tally));
}

const arr = [1, 4, 4, 4, 5, 3];

console.log(migratoryBirds(arr));
console.log(migratoryBirds2(arr));
