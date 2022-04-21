'use strict';

console.clear();

function minimumNumber(n, password) {
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let count = 0;
  n < 6
    ? count++
    : !regexLower.test(password)
    ? count++
    : !regexUpper.test(password)
    ? count++
    : !regexSpecial.test(password)
    ? count++
    : !password.test(regexDigit)
    ? count++
    : count;
  //
  return count;
}

console.log(minimumNumber(3, 'Ab1'));
