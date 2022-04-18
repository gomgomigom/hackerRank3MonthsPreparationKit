'use strict';
console.clear();

function caesarCipher(s, k) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  for (let i = 0; i < s.length; i++) {
    lower.indexOf(s[i]) >= 0
      ? result.push(lower[(lower.indexOf(s[i]) + k) % 26])
      : upperAlphabet.indexOf(s[i]) >= 0
      ? result.push(upperAlphabet[(upperAlphabet.indexOf(s[i]) + k) % 26])
      : result.push(s[i]);
  }
  return result.join('');
}

console.log('testCase1👇');
console.log(caesarCipher('middle-Outz', 2));
console.log('------------------------------');
console.log('testCase2👇');
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5));
