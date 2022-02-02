'use strict';

function pangrams(s) {
  const upper = s.toLowerCase();
  const alphabet = [...'zxcvbnmfhjdskalgqwertyuiop'];
  console.log(alphabet.length);
  console.log(upper);
  console.log(alphabet);
  let countAlphabet = 0;
  for (let i of alphabet) {
    lower.indexOf(i) !== -1 ? countAlphabet++ : countAlphabet;
  }
  console.log(countAlphabet);
}

const s = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(s));
