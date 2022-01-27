'use strict';

function lonelyinteger(a) {
  let duplicate = 0;
  for (let num1 = 0; num1 < a.length - 1; num1++) {
    console.log(`num1: ${num1}`);
    for (let num2 = num1 + 1; num2 < a.length; num2++) {
      console.log(`num2: ${num2}`);
      if (a[num1] === a[num2]) {
        duplicate = 1;
      }
      console.log(num2);
      console.log(duplicate);
    }
    if (duplicate !== 1) {
      console.log(a[num1]);
    }

    // Write your code here=
  }
}
const a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
