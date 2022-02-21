'use strict';

function caesarCipher(s, k) {
  const alphabetShift = (string, shift) =>
    String.fromCharCode((string.charCodeAt(0) % 96) + 96 + shift);
  console.log(
    [...s].reduce((pre, cur, index) => {
      console.log(`${pre}, ${cur}, ${index}`);
      pre === 0 && return '';
      return pre + alphabetShift(cur, k);
    }, 0)
  );
  console.log(s);
  console.log(s.charCodeAt(0));
  console.log(String.fromCharCode(s.charCodeAt(0) + 3));
  console.log(String.fromCharCode(92));

  // Write your code here
}

const s = 'amiddle-Outz';
const k = 2;

console.log(caesarCipher(s, k));
