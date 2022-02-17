'use strict';

function separateNumbers(s) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    console.log(s[i] + s[i + 1]);
    console.log(i);
    // Write your code here
  }
}

const s = '91011';

console.log(separateNumbers(s));
