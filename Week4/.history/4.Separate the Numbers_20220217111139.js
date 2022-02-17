'use strict';

function separateNumbers(s) {
  let start = '';
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    start = parseInt(s.slice(0, i + 1), 10);
    temp = start;
    let result = '';
    while (result.length < s.length) {
      result += temp;
      temp++;
    }
    result === s ? console.log(`YES ${start}`) : console.log('NO');
  }
}

const s = '1234';

console.log(separateNumbers(s));
