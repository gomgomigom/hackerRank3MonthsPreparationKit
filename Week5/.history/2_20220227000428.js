'use strict';

function minimumNumber(n, password) {
  const regexDigit = /[0-9]/;
  const regex
  let result = 5;
  n >= 6 ? result-- : result;
  regexDigit.test(password) === true ? result-- : result;

  return result;
  // Return the minimum number of characters to make the password strong
}

const n = 3;
const password = 'Ab1';
