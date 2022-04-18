'use strict';
console.clear();

function caesarCipher(s, k) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  for (let i = 0; i < s.length; i++) {
    lowerAlphabet.indexOf(s[i])
      ? result.push(lowerAlphabet[(lowerAlphabet.indexOf(s[i]) + k) % 26])
      : result;
  }

  return result.join('');
}

console.log('testCase1👇');
console.log(caesarCipher('middle-Outz', 2));
console.log('------------------------------');
console.log('testCase2👇');
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5));
