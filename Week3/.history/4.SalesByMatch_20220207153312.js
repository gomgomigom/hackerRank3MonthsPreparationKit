'use strict';

function sockMerchant(n, ar) {
  let count = 0;
  let k = 0;
  for (let i of ar) {
    ar.reduce((pre, cur, index) => {
      if (pre === cur) {
        count++;
        splice(index, 1);
        splice();
      }
      return i;
    });
  }

  // Write your code here
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
