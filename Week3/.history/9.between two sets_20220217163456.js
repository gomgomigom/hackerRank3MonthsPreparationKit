'use strict';

function getTotalX(a, b) {
  const lowestCommonMultiple = (a) => {
    let result = [];
    let min = 100;
    for (let i = 0; i < a.length; i++) {
      let j = 1;
      while (a[i] * j <= 100) {
        result.push(a[i] * j);
        j++;
      }
    }
  };
  lowestCommonMultiple(a);
  return lowestCommonMultiple(a);
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotalX(a, b));
