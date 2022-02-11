'use strict';

function pageCount(n, p) {
  console.log(`n: ${n}, p: ${p}`);
  const page = Math.ceil(n / 2);
  const wantFindPage = Math.floor(p + 1 / 2);
  const result = p % 2;
  return result;
}

const n = 6;
const p = 2;

console.log(pageCount(n, p));
