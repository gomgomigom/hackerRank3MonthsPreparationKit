'use strict';

function birthday(s, d, m) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; let k = 0; k < m - 1;)
  }

  console.log(`s: ${s}, d: ${d}, m: ${m}`);
  // s[i] + s[j] === d
  // [s[i], s[j]].length === m
  // Write your code here
  s.reduce((pre, cur) => {
    pre + cur === d && cur;
    return cur;
  }, 0);
}

const s = [1, 2, 1, 3, 2];
const d = 5;
const m = 3;

console.log(birthday(s, d, m));
