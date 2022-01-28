'use strict';

function lonelyinteger(a) {
  let duplicate = 0;
  for (let num1 of a) {
    for (let num2 of a) {
      a[num1] === a[num2] ? duplicate++ : duplicate;
    }
    if (duplicate < 2) {
      return a[num1];
    }
    duplicate = 0;
  }
}

function lonelyinteger2(a) {
  a.sort().reduce((x, y, z) => {
    console.log(x, y, z);
    // console.log(x ^ y);
    x ^ y;
  });
}
const a = [1, 1, 2, 2, 3];

// console.log(`num1: ${num1} // num2: ${num2}`);
// console.log(`answer: ${lonelyinteger(a)}`);
console.log(`answer: ${lonelyinteger2(a)}`);
