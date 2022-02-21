'use strict';

function caesarCipher(s, k) {
  const alphabetShift = (string, shift) =>
    String.fromCharCode((string.charCodeAt(0) % 96) + 96 + shift);
  const result = [...s].reduce((pre, cur, index) => {
    console.log(`${pre}, ${cur}, ${index}`);
    if (pre === 0) {
      return alphabetShift(cur, k);
    }
    if (cur === /[^a-z]/gim) {
      return pre + cur;
    } else {
      return pre + alphabetShift(cur, k);
    }
  }, 0);

  return result;
  // Write your code here
}

const s = 'abcmiddle-Outz';
const k = 1;

console.log(caesarCipher(s, k));
console.log(s);
