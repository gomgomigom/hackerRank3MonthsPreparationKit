'use strict';

function caesarCipher(s, k) {
  const regex = /[a-zA-Z가-힣ㄱ-ㅎ]/;
  const alphabetShift = (string, shift) =>
    String.fromCharCode(
      string.charCodeAt(0) <= 90
        ? ((string.charCodeAt(0) + (shift % 64)) % 26) + 64
        : ((string.charCodeAt(0) + (shift % 96)) % 26) + 96
    );

  const result = [...s].reduce((pre, cur, index) => {
    console.log(`${pre}, ${cur}, ${index}`);
    console.log(regex.test(cur));
    if (pre === 0) {
      return alphabetShift(cur, k);
    }
    if (regex.test(cur) == false) {
      return pre + cur;
    } else {
      return pre + alphabetShift(cur, k);
    }
  }, 0);

  return result;
  // Write your code here
}

const s = 'ABCdefg-hijklmnop-qrstuvw-xYz';
const k = 5;

console.log(caesarCipher(s, k));
console.log(s);
