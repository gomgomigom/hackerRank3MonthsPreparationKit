'use strict';

function pickingNumbers(a) {
  const countingSort = new Array(101).fill(0);
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    countingSort[a[i]]++;
  }
  for (let pre = 0; pre < countingSort.length; pre++) {}
  console.log(a);
  // Write your code here
}

const a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));
