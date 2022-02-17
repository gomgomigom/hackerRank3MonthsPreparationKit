'use strict';

function separateNumbers(s) {
  let result = '';
  let start = '';
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    start = parseInt(s.slice(0, i + 1), 10);
  }
}

const s = '1234';

console.log(separateNumbers(s));
