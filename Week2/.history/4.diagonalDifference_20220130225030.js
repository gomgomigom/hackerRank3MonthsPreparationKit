'use strict';

function diagonalDifference(arr) {
  const leftToRight = arr.reduce((pre, cur, index) => {
    console.log(
      `pre: ${pre}, cur[index]: ${cur[index]}// cur: ${cur}, index: ${index}`
    );
    return pre + cur[index];
  }, 0);

  const rightToLeft = arr.reduceRight((pre, cur, index) => {
    return pre + cur[index];
  }, 0);
  return Math.abs(leftToRight);
  // Write your code here
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
