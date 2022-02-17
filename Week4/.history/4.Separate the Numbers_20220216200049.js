'use strict';

function separateNumbers(s) {
  let mid = Math.floor(s.length / 2);
  let st = '';
  let t = '';
  let temp = '';
  for (let i = 0; i < mid; i++) {
    st = s.slice(0, i + 1);
    temp = BigInt(st);
    t = '';
    while (t.length < s.length) {
      t += temp;
      temp++;
    }
    if (s === t) {
      console.log(`YES ${st}`);
      return;
    }
  }
  console.log('NO');
}
const s = '99100101';

console.log(separateNumbers(s));
