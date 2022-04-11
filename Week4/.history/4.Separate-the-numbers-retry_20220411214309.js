'use strict';

console.clear();

function separateNumbers(s) {
  const mid = Math.floor(s.length / 2);
  let start = '';
  let result = '';
  let temp = '';

  for (let i = 0; i < mid; i++) {
    start = s.slice(0, i + 1);
    temp = BigInt(start);
    result = '';
    console.log(
      `before while start: ${start}, temp: ${temp}, result: ${result}`
    );
    while (result.length < s.length) {
      result += temp;
      temp++;
    }
    if (s === result) {
      console.log(`✨YES ${start}✨`);
      return;
    }
  }
  console.log('NO');
}

const s = '99100';

separateNumbers(s);
