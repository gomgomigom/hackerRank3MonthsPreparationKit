'use strict';

function pickingNumbers(a) {
  const countingSort = new Array(101).fill(0);
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    countingSort[a[i]]++;
  }
  console.log(max);
  for (let pre = 0; pre < countingSort.length - 1; pre++) {
    max = Math.max(countingSort[pre] + countingSort[pre + 1], max);
    console.log(max);
    console.log(countingSort);
  }
  return max;
  // Write your code here
}

const a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));
