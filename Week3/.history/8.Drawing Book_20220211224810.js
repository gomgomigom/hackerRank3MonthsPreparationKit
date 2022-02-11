'use strict';

function pageCount(n, p) {
  const page = Math.ceil(n / 2);
  const wantFindPage = Math.floor((p + 1) / 2);
  const deltaPage = page - wantFindPage;
  console.log(`page: ${page}, wantFindPage: ${wantFindPage}`);
  const result = wantFindPage > deltaPage ? deltaPage : wantFindPage;
  return result;
}

const n = 5;
const p = 4;

console.log(pageCount(n, p));
