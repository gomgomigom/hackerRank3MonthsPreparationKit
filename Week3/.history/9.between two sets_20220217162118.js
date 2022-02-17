'use strict';

function getTotalX(a, b) {
  let result = [];
  const lowestCommonMultiple = (a) => {
    let min = 100;
    for (let i = 0; i < a.length; i++) {
      let j = 1;
      while (a[i] * j <= 100) {
        result.push(a[i] * j);
        j++;
      }
    }
    result.reduce((a, b) => a ^ b);
  };
  lowestCommonMultiple(a);
  return result;
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotalX(a, b));
