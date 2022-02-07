'use strict';

function sockMerchant(n, ar) {
  let count = 0;
  for (let i = 0, k = 0; i < ar.length; i++, k++) {
    for (let j = 1; j < ar.length; j++) {
      // console.log(ar);
      ar[i + j] && console.log(ar[i], ar[i + j]);
    }
  }
}

// Write your code here

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
