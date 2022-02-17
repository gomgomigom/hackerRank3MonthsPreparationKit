'use strict';

function getTotalX(a, b) {
  const lowestCommonMultiple = (a) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      let j = 1;
      while (a[i] * j <= 100) {
        result.push(a[i] * j);
        j++;
      }
    }
    const countingSort = new Array(101).fill(0);
    for (let i = 0; i < result.length; i++) {
      countingSort[result[i]]++;
    }
    return countingSort.indexOf(a.length);
  };

  const greatestCommonDenominator = (b) => {
    let result = [];
    for (let i = 0; i < b.length; i++) {
      let j = 100;
      while (j >= b[0]) {
        if (b[i] % j === 0) {
          result.push(j);
        }
      }
    }
    console.log(result);
  };

  const LCM = lowestCommonMultiple(a);

  return lowestCommonMultiple(a);
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotalX(a, b));
