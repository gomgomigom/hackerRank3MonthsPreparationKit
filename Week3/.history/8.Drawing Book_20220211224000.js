'use strict';

function pageCount(n, p) {
  const page = Math.ceil((n + 1) / 2);
  const wantFindPage = Math.floor(p + 1 / 2);
  console.log(`page: ${page}, wantFindPage: ${wantFindPage}`);
  const result = p % 2;
  return result;
}

const n = 6;
const p = 2;

console.log(pageCount(n, p));
