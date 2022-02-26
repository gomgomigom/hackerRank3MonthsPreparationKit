'use strict';

function minimumNumber(n, password) {
  const regexDigit = /[0-9]/;
  const regexLower = /[a-z]/;
  const regexUpper = /[A-Z]/;
  const regexSpecial = /[\!\@\#\$\%\^\&\*\(\)\-\+]/;

  let result = '';
  let lackOfLength = 6 - n;
  let lackOfCharacters = 0;

  lackOfLength <= 0 ? (lackOfLength = 0) : lackOfLength;
  regexDigit.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  console.log(lackOfCharacters);
  regexLower.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  console.log(lackOfCharacters);
  regexUpper.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  console.log(lackOfCharacters);
  regexSpecial.test(password) === true ? lackOfCharacters : lackOfCharacters++;
  console.log(lackOfCharacters);

  lackOfCharacters <= lackOfLength
    ? (result = lackOfLength)
    : (result = lackOfCharacters);
  return result;
}

const n = 3;
const password = 'Ab1';

console.log(minimumNumber(n, password));
