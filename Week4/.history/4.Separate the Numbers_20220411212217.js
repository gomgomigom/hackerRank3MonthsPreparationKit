'use strict';

function separateNumbers(s) {
  let start = '';
  let temp = '';
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    start = BigInt(s.slice(0, i + 1), 10);
    console.log(start);
    temp = start;
    let result = '';
    while (result.length < s.length) {
      result += temp;
      temp++;
    }
    if (result === s) {
      return console.log(`YES ${start}`);
    }
  }
  return console.log('NO');
}

const s = '99100101';

console.log(separateNumbers(s));
