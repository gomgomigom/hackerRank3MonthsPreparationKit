'use strict';

// function pickingNumbers(a) {
//   let max = 0;
//   const countingSort = new Array(Math.max(...a) + 1).fill(0); // [ 0,0,0,0,0,0,0]
//   for (let i = 0; i < a.length; i++) {
//     countingSort[a[i]]++; //[0, 0, 0, 0, 1, 0, 0]
//   }
//   // [0, 1, 0, 2, 1, 1, 1]
//   for (let pre = 0; pre < countingSort.length - 1; pre++) {
//     max = Math.max(countingSort[pre] + countingSort[pre + 1], max);
//   }
//   return max;
// }

function pickingNumbers(a) {
  a.sort((a, b) => a - b);
  let diff = [];
  for (let key = 0; key < a.length - 1; key++) {
    Math.abs(a[key + 1] - a[key]) === 0
      ? diff.push(0)
      : Math.abs(a[key + 1] - a[key]) === 1
      ? diff.push(1)
      : diff.push(2);
  }
  console.log(diff);
  let result = [];
  let continuous = 1;
  for (let key = 0; key < diff.length; key++) {
    diff[key] + diff[key + 1] === 0
      ? continuous++
      : diff[key + 1] + diff[key] === 1
      ? continuous++
      : (result.push(continuous), (continuous = 1));
  }
  console.log(result);
  const maxContinuous = Math.max(...result);
  return maxContinuous;
}

// let diffMoreThanTwo = [0];
// for (let key = 0; key < a.length; key++) {
//   if (Math.abs(a[key + 1] - a[key]) > 1) {
//     diffMoreThanTwo.push(key + 1);
//   }
//   for (let key = 0; key < diffMoreThanTwo.length; key++) {
//     let res = key;
//     if (diffMoreThanTwo[key + 1] - diffMoreThanTwo[key] > res) {
//       res = diffMoreThanTwo[key + 1] - diffMoreThanTwo[key];
//     }
//   }
// return res;

const a = [4, 6, 5, 3, 3, 1];

console.log(pickingNumbers(a));
