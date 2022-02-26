'use strict';

function minimumNumber(n, password) {
  const regexDigit = /[0-9]/;
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;
  let result = 5;
  regexDigit.test(password) === true ? result-- : result;
  regexLower.test(password) === true ? result-- : result;
  regexUpper.test(password) === true ? result-- : result;
  regexSpecial.test(password) === true ? result-- : result;
  if (result === 0) {
  }
  return result;
  // Return the minimum number of characters to make the password strong
}

const n = 3;
const password = 'Ab1';

console.log(minimumNumber(n, password));
