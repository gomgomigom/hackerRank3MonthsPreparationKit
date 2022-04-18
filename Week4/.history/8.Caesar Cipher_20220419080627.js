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
    if (pre === 0) {
      return regex.test(cur) === false ? cur : alphabetShift(cur, k);
    } else {
      return regex.test(cur) === false ? pre + cur : pre +alphabetShift(cur, k);
    if (regex.test(cur) == false) {
      return pre + cur;
    } else {
      return pre + alphabetShift(cur, k);
    }
  }, 0);
  return result;
}

const s = 'middle-Outz';
const k = 2;

console.log(caesarCipher(s, k));
console.log('okffng-Qwvb');
console.log('----');
console.log(s);
