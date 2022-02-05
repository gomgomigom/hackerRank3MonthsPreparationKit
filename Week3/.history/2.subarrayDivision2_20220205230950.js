'use strict';

function birthday(s, d, m) {
  let chocolate = [];
  let answer = 0;

  console.log(`s: ${s}, d: ${d}, m: ${m}`);
  // s[i] + s[j] === d
  // [s[i], s[j]].length === m
  // Write your code here
  s.reduce((pre, cur) => {
    pre + cur === d && cur;
    return cur;
  }, 0);
}

function birthday2(s, d, m) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    sum = parseInt(s[i], 10);
    for (let j = i + 1, k = 0; k < m - 1; k++, j++) {
      sum += parseInt(s[j], 10);
      console.log(
        `i = ${i}, j = ${j}, k = ${k}, sum = ${sum} count = ${count}`
      );
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 3;

// console.log(birthday(s, d, m));

console.log(birthday2(s, d, m));
