'use strict';

function kangaroo(x1, v1, x2, v2) {
  let result;
  const deltaX = Math.abs(x1 - x2);
  const deltaV = Math.abs(v1 - v2);
  deltaX % deltaV === 0 ? (result = 'Yes') : (result = 'No');
  (x1 > x2 && v1 > v2) && result = 'No';
  x2 > x1 && v2 > v1 && result = 'No';
  return result;
}

const x1 = 0;
const v1 = 2;
const x2 = 5;
const v2 = 3;

console.log(kangaroo(x1, v1, x2, v2));
