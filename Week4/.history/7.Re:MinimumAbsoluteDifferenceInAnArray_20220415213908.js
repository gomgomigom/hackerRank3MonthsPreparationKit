'use strict';
console.clear();

function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);

  let min = Infinity;

  arr.reduce((pre, cur) => {
    console.log(`pre: ${pre}, cur: ${cur}, cur-pre: ${cur - pre}`);

    const diff = Math.abs(cur - pre);
    min = Math.min(diff, min);
    return min;
  });

  return min;
}

console.log('testCase1👇');
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17]));
console.log('------------------------------');
console.log('testCase2👇');
console.log(minimumAbsoluteDifference([3, -7, 0]));
