'use strict';

function pageCount(n, p) {
  console.log(`n: ${n}, p: ${p}`);
  const result = parseInt(p / 2, 10);
  return result;
  // Write your code here
}

const n = 6;
const p = 2;

console.log(pageCount(n, p));
