'use strict';

function sockMerchant(n, ar) {
  let count = 0;
  for (let i = 0, k = 0; i < ar.length - 1; i++, k++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        ar.splice(j, 1);
        count++;
      }
      console.log(ar[i], ar[j]);
    }
  }
}

// Write your code here

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
