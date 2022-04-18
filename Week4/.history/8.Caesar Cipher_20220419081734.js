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
    console.log(`pre: ${pre}  +   cur: ${cur}`);
    // console.log(regex.test(cur));
    if (pre === 0) {
      return regex.test(cur) === false //
        ? pre + cur
        : pre + alphabetShift(cur, k);
    } else {
      return regex.test(cur) === false
        ? pre + cur
        : pre + alphabetShift(cur, k);
    }
  }, 0);
  return result.shift(1);
}

const s = 'middle-Outz';
const k = 2;

console.log(caesarCipher(s, k));
console.log('okffng-Qwvb');
console.log('----');
console.log(s);
