'use strict';

console.clear();

function minimumNumber(n, password) {
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let lackOfCharacters = 0;
  let lackOfLength = 6 - n;

  n < 6 ? count++ : count;
  console.log(count);
  !regexLower.test(password) ? count++ : count;
  console.log(count);
  !regexUpper.test(password) ? count++ : count;
  console.log(count);
  !regexSpecial.test(password) ? count++ : count;
  console.log(count);
  !regexDigit.test(password) ? count++ : count;
  console.log(count);
  //
  console.log('--');
  return count;
}

console.log('--');
console.log(minimumNumber(3, 'Ab1'));
