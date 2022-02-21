'use strict';

function caesarCipher(s, k) {
  const regex = /[a-zA-Z]/;
  const alphabetShift = (string, shift) => {
    return String.fromCharCode(
      string.charCodeAt(0) <= 90
        ? ((string.charCodeAt(0) - 65 + (shift % 26)) % 26) + 65
        : ((string.charCodeAt(0) - 97 + (shift % 26)) % 26) + 97
    );
  };

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

const s = '6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr';
const k = 87;

console.log(caesarCipher(s, k));
console.log(s);
