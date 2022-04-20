'use strict';

function pageCount(n, p) {
  const page = Math.floor(1 + n / 2);
  const wantFindPage = 1 + Math.floor(p / 2);
  const deltaPage = page - wantFindPage;
  console.log(
    `page: ${page}, wantFindPage: ${wantFindPage}, deltaPage: ${deltaPage}`
  );
  const result = wantFindPage > deltaPage ? deltaPage : wantFindPage - 1;
  return result;
}

function pageCount(n, p) {
  const pageMaxIndex = Math.floor(n / 2);
  const targetIndex = Math.floor(p / 2);
  const result = Math.min(targetIndex, pageMaxIndex - targetIndex);
}

const n = 6;
const p = 3;

console.log(pageCount(n, p));
