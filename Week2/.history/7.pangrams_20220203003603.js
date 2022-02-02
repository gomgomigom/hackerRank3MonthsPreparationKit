'use strict';

function pangrams(s) {
  const upper = s.toLowerCase();
  const alphabet = [...'zxcvbnmfhjdskalgqwertyuiop'];
  console.log(alphabet.length);
  console.log(upper);
  console.log(alphabet);
  for (let i of alphabet)
}

const s = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(s));
