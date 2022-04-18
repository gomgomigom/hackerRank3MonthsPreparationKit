'use strict';

console.clear();

function caesarCipher(s, k) {
  const regex = /[a-zA-Z]/;
  const alphabetShift = (string, shift) => {
    return String.fromCharCode(
      string.charCodeAt() <= 90 // charCodeAt
        ? ((string.charCodeAt() - 65 + shift) % 26) + 65
        : ((string.charCodeAt() - 97 + shift) % 26) + 97
    );
  };

  const result = [...s].reduce((pre, cur) => {
    console.log(cur.charCodeAt());
    console.log(String.fromCharCode());
    // console.log(`${pre}, ${cur}, ${index}`);
    // console.log(regex.test(cur));
    if (regex.test(cur) == false) {
      return pre + cur;
    } else {
      return pre + alphabetShift(cur, k);
    }
  });
  return result;
}

const s = 'middle-Outz';
const k = 87;

console.log(caesarCipher(s, k));
console.log('6MFE95QigCLQY85m');
console.log('----');
console.log(s);
