'use strict';

console.clear();

function minimumNumber(n, password) {
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let count;
  n < 6
    ? count++
    : !password.test(regexLower)
    ? count++
    : !password.test(regexUpper)
    ? count++
    : !password.test(regexSpecial)
    ? count++
    : !password.test(regexDigit)
    ? count++
    : count;
  //
  return n, password;
}

console.log(minimumNumber(3, 'Ab1'));
