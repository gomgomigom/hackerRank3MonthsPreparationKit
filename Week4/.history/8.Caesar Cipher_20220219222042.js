'use strict';

function caesarCipher(s, k) {
  const alphabetToNumber = (index) => s.charCodeAt(index);
  console.log(s.charCodeAt(0));
  console.log(String.fromCharCode(s.charCodeAt(0) + 3));
  console.log(String.fromCharCode(92));

  // Write your code here
}

const s = 'middle-Outz';
const k = 2;

console.log(caesarCipher(s, k));
