'use strict';

function lonelyinteger(a) {
  let duplicate = 0;
  for (let num1 = 0; num1 < a.length; num1++) {
    for (let num2 = 0; num2 < a.length; num2++) {
      console.log(`num1: ${num1} // num2: ${num2}`);
      if (a[num1] === a[num2]) {
        duplicate++;
      }
    }
    if (duplicate < 1 {
      return a[num1];
    }
    duplicate = false;
  }
}
const a = [1, 1, 2];

console.log(`answer: ${lonelyinteger(a)}`);
