'use strict';

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

ar.sort((a, b) => {
  console.log(`a: ${a}, b: ${b}, a-b: ${a - b}`);
  console.log(a - b);
  return a - b;
});
console.log(ar);
