'use strict';

console.clear();

function separateNumbers(s) {
  let mid = Math.floor(s.length / 2);
  let start = '';
  let t = '';
  let temp = '';
  for (let i = 0; i < mid; i++) {
    start = s.slice(0, i + 1);
    temp = BigInt(start);
    t = '';
    while (t.length < s.length) {
      t += temp;
      temp++;
    }
    if (s === t) {
      console.log(`✨YES ${start}✨`);
      return;
    }
  }
  console.log('NO');
}

const s = '99100';

separateNumbers(s);
