'use strict';

function kangaroo(x1, v1, x2, v2) {
  let result;
  if (x1 < x2) {
    x1 + v1 > x2 ? (result = 'Yes') : (result = 'No');
  } else {
    x2 + v2 > x1 ? (result = 'Yes') : (result = 'No');
  }
  x1 + v1 === x2 + v2 ? (result = 'Yes') : (result = 'NO');
  return result;
  // Write your code here
}

const x1 = 2;
const v1 = 1;
const x2 = 1;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));
