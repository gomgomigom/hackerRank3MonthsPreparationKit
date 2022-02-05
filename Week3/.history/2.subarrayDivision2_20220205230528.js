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
    sum = s[i];
    console.log(`i = ${i}, sum = ${sum}`);
    for (let j = i + 1, k = 0; k < m - 1; k++, j++) {
      sum += s[j];
      console.log(`j = ${j}, k = ${k} sum = ${sum}`);
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}

const s = parseInt('1 2 1 3 2'.split(' '), 10);
const d = 3;
const m = 2;
console.log(s);

// console.log(birthday(s, d, m));

console.log(birthday2(s, d, m));
