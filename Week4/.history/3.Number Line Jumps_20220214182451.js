'use strict';

function kangaroo(x1, v1, x2, v2) {
  let result;
  if (x1 < x2) {
    x1 + v1 > x2 ? (result = 'Yes') : (result = 'No');
  } else {
    x2 + v2 > x1 ? (result = 'Yes') : (result = 'No');
  }
  return result;
  // Write your code here
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));
