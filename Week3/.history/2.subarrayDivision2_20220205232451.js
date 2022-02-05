'use strict';

function birthday(s, d, m) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    sum += s[i];
    for (let j = 1; j < m; j++) {
      sum += s[i + j];
      sum === d && count++;
    }
    sum = 0;
  }
  return count;
}

const s = [4];
const d = 4;
const m = 1;

console.log(birthday(s, d, m));
