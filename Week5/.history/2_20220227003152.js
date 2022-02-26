'use strict';

function minimumNumber(n, password) {
  const regexDigit = /[0-9]/;
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;

  let result = '';
  let lackOfLength = 6 - n;
  console.log(lackOfLength);
  let lackOfCharacters = 0;

  lackOfLength <= 0 ? (lackOfLength = 0) : lackOfLength;
  regexDigit.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  regexLower.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  regexUpper.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  regexSpecial.test(password) === true ? lackOfCharacters : lackOfCharacters++;

  lackOfCharacters <= lackOfLength
    ? (result = lackOfCharacters)
    : (result = lackOfLength);
  return result;
}

const n = 3;
const password = 'Ab1';

console.log(minimumNumber(n, password));
