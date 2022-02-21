'use strict';

function caesarCipher(s, k) {
  const regex = /[a-zA-Z가-힣ㄱ-ㅎ]/g;
  const alphabetShift = (string, shift) =>
    String.fromCharCode((string.charCodeAt(0) % 96) + 96 + shift);

  const result = [...s].reduce((pre, cur, index) => {
    console.log(`${pre}, ${cur}, ${index}`);
    if (pre === 0) {
      return alphabetShift(cur, k);
    }
    if (regex.test(cur) == true) {
      return pre + cur;
    } else {
      return pre + alphabetShift(cur, k);
    }
  }, 0);

  return result;
  // Write your code here
}

const s = 'abcmiddle-Outz';
const k = 0;

console.log(caesarCipher(s, k));
console.log(s);
