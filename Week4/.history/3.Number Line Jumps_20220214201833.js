'use strict';

function kangaroo(x1, v1, x2, v2) {
  let result;
  const deltaX = x2 - x1;
  const deltaV = v1 - v2;
  deltaX % deltaV === 0 ? (result = 'Yes') : (result = 'No');
  return result;
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));
