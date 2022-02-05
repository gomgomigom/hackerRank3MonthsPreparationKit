'use strict';

function birthday(s, d, m) {
  let chocolate = [];
  let answer = 0;

  console.log(`s: ${s}, d: ${d}, m: ${m}`);
  // s[i] + s[j] === d
  // [s[i], s[j]].length === m
  // Write your code here
  s.reduce((pre, cur) => {
    return cur;
  }, 0);
}

const s = '1 2 1 3 2'.split(' ');
const d = 3;
const m = 2;

console.log(birthday(s, d, m));
