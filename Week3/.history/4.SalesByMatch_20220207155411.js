'use strict';

function sockMerchant(n, ar) {
  let count = 0;
  for (let i = 0; i < ar.length - 1; i++, k++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        console.log(`i: ${i}, j: ${j}, count: ${count}, ar: ${ar}`);
        ar.splice(i, 1);
        ar.splice(j, 1);
        console.log(`i: ${i}, j: ${j}, count: ${count}, ar: ${ar}`);
        count++;
        j;
      }
    }
  }
  return count;
}

// Write your code here

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));
