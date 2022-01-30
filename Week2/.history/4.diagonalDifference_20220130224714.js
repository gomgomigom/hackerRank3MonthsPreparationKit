'use strict';

function diagonalDifference(arr) {
  const answer = arr.reduce((pre, cur, index) => {
    console.log(
      `pre: ${pre}, cur[index]: ${cur[index]}: ${cur}, index: ${index}`
    );
    return pre + cur[index];
  }, 0);
  return answer;
  // Write your code here
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
