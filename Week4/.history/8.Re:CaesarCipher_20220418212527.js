'use strict';
console.clear();

function caesarCipher(s, k) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  for (let i = 0; i < s.length; i++) {
    console.log(lowerAlphabet.indexOf(s[i]));
    lowerAlphabet.indexOf(s[i]) >= 0
      ? result.push(lowerAlphabet[(lowerAlphabet.indexOf(s[i]) + k) % 26])
      : result.push(s[i]);
  }

  return result.join('');
}

console.log('testCase1👇');
console.log(caesarCipher('middle-Outz', 2));
console.log('------------------------------');
console.log('testCase2👇');
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5));
