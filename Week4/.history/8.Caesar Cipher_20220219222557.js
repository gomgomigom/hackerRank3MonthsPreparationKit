'use strict';

function caesarCipher(s, k) {
  const alphabetToNumber = (index) => s.charCodeAt(index);
  const numberToAlphabet = (number, shift) =>
    String.fromCharCode(number + shift);
  s.reduce((pre, cur, index) => {
    console.log(`${pre}, ${cur}, ${index}`);
  });
  console.log(s.charCodeAt(0));
  console.log(String.fromCharCode(s.charCodeAt(0) + 3));
  console.log(String.fromCharCode(92));

  // Write your code here
}

const s = 'middle-Outz';
const k = 2;

console.log(caesarCipher(s, k));
