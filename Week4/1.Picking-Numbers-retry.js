'use strict';

function pickingNumbers(a) {
  let max = 0;
  const countingSort = new Array(Math.max(...a) + 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    countingSort[a[i]]++;
  }
  for (let pre = 0; pre < countingSort.length - 1; pre++) {
    max = Math.max(countingSort[pre] + countingSort[pre + 1], max);
  }
  return max;
}

const a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));
