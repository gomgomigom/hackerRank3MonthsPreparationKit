'use strict';

function kangaroo(x1, v1, x2, v2) {
  let n = 1;
  let result;
  const firstKangarooLocation = x1 + n * v1;
  const secondKangarooLocation = x2 + n * v2;
  while (firstKangarooLocation < secondKangarooLocation) {
    if (firstKangarooLocation == secondKangarooLocation) {
      result = 'YES';
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
