'use strict';

function kangaroo(x1, v1, x2, v2) {
  let result;
  for (let n = 1; n <= Math.abs(x1 - x2); n++) {
    const firstKangarooLocation = x1 + n * v1;
    const secondKangarooLocation = x2 + n * v2;
    if (firstKangarooLocation == secondKangarooLocation) {
      result = 'Yes';
      break;
    } else {
      result = 'No';
    }
  }
  return result;
  // Write your code here
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2));
