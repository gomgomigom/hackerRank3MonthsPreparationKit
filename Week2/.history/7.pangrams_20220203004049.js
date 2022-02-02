'use strict';

function pangrams(s) {
  const lower = s.toLowerCase();
  const alphabet = [...'zxcvbnmfhjdskalgqwertyuiop'];
  let countAlphabet = 0;
  for (let i of alphabet) {
    lower.indexOf(i) !== -1 ? countAlphabet++ : countAlphabet;
  }
  console.log(countAlphabet);
  const answer = countAlphabet === 26 ? 'pangrams' : 'not pangrams';
  return answer;
}

const s = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(s));
