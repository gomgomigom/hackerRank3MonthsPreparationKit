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
    return countingSort(result).indexOf(a.length);
  };

  const countingSort = (arr) => {
    let sortedArray = new Array(101).fill(0);
    for (let i = 0; i < arr.length; i++) {
      sortedArray[arr[i]]++;
    }
    return sortedArray;
  };
  const LCM = lowestCommonMultiple(a);

  let result = [];
  for (let i = 0; i < b.length; i++) {
    for (let j = 1; j * LCM <= 100; j++) {
      b[i] % (LCM * j) === 0 && result.push(LCM * j);
    }
    console.log(result);
  }

  const cs = countingSort(result);

  let count = 0;
  for (let i = 0; i < cs.length; i++) {
    cs[i] === b.length && count++;
  }
  return count;
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotalX(a, b));
