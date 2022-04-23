'use strict';

console.clear();

function minimumNumber(n, password) {
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let count = 0;
  let lackOfLength = 6 - n;

  n < 6 ? count++ : count;
  !regexLower.test(password) ? count++ : count;
  !regexUpper.test(password) ? count++ : count;
  !regexSpecial.test(password) ? count++ : count;
  !regexDigit.test(password) ? count++ : count;

  lackOfLength > count ? (count = lackOfLength) : count;
  return count;
}

console.log('--');
console.log(minimumNumber(3, 'Ab1'));