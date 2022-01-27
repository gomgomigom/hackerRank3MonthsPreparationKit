'use strict';

function lonelyinteger(a) {
  let duplicate = true;
  for (let num1 = 0; num1 < a.length - 1; num1++) {
    for (let num2 = num1 + 1; num2 < a; num2++) {
      a[num1] === a[num2] ? (duplicate = true) : duplicate;
    }
    if (duplicate === false) {
      return a[num1];
    }
  }

  // Write your code here=
}

const a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
