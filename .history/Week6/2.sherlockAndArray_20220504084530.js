'use strict';

console.clear();

function balancedSums(arr) {
  let result;
  arr.forEach((value, midIndex) => {
    const left = arr.reduce((pre, cur, index) => {
      if (index < midIndex) {
        return pre + cur;
      } else {
        return pre;
      }
    });
    const right = arr.reduce((pre, cur, index) => {
      if (index > midIndex) {
        return pre + cur;
      } else {
        return pre;
      }
    }, 0);
    if (left === right) {
      return (result = 'YES');
    }
  });
  if (!result) {
    result = 'NO';
  }
  return result;
}

function balancedSums2(arr) {
  let result;
  let left = 0;
  let right = 0;
  right = arr.reduce((a, b) => a + b);
  // console.log(arr);
  arr.reduce((pre, cur) => {
    // console.log(`pre: ${pre}, cur: ${cur}, index: ${index}`);
    left += pre;
    right -= cur;
    // console.log(left, right);
    if (left === right) result = 'YES';
    return cur;
  }, 0);

  return result || 'NO';
}

console.log('-----');
console.log(balancedSums2([1, 2, 3]));
console.log('no');
console.log('-----');
console.log(balancedSums2([1, 2, 3, 3]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([1, 2, 3, 3]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([1, 1, 4, 1, 1]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([2, 0, 0, 0]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([0, 0, 2, 0]));
console.log('yes');
