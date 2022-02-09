'use strict';

function sockMerchant(n, ar) {
  let count = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] === ar[j]) {
        console.log(`before i: ${i}, j: ${j}, count: ${count}, ar: ${ar}`);
        ar.splice(i, 1);
        ar.splice(j - 1, 1);
        count++;
        console.log(`after  i: ${i}, j: ${j}, count: ${count}, ar: ${ar}`);
        i = -1;
        j = ar.length;
      }
    }
  }
  return count;
}

// Write your code here

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(n, ar));

const n2 = 9;
const ar2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log;
