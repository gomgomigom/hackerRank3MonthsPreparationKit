'use strict';

function pageCount(n, p) {
  const page = Math.ceil((n + 1) / 2);
  const wantFindPage = Math.floor((p + 1) / 2);
  const deltaPage = page - wantFindPage;
  console.log(`page: ${page}, wantFindPage: ${wantFindPage}`);
  const result = 
  return result;
}

const n = 6;
const p = 2;

console.log(pageCount(n, p));
