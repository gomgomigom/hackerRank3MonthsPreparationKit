'use strict';

console.clear();

function separateNumbers(s) {
  let mid = Math.floor(s.length / 2);
  let st = '';
  let result = '';
  let temp = '';
  for (let i = 0; i < mid; i++) {
    st = s.slice(0, i + 1);
    temp = BigInt(st);
    result = '';
    while (result.length < s.length) {
      result += temp;
      temp++;
    }
    if (s === t) {
      console.log(`✨YES ${st}✨`);
      return;
    }
  }
  console.log('NO');
}

const s = '99100';

separateNumbers(s);
