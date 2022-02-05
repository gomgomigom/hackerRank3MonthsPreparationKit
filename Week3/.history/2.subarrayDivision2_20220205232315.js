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

  
const s = [1, 2, 1, 3, 2];
const d = 5;
const m = 3;

console.log(birthday(s, d, m));
