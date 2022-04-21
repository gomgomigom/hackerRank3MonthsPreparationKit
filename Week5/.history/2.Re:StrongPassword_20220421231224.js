'use strict';

console.clear();

function minimumNumber(n, password) {
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexDigit = /[0-9]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let count = 0;
  n < 6
    ? count++ , console.log(count)
    : !regexLower.test(password)
    ? count++
    : !regexUpper.test(password)
    ? count++
    : !regexSpecial.test(password)
    ? count++
    : !regexDigit.test(password)
    ? count++
    : count;
  //
  return count;
}

console.log(minimumNumber(3, 'Ab1'));
