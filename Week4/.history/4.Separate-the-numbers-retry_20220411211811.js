'use strict';

function separateNumbers(s) {
  const arr = s.split('');
  const length = arr.length;
  console.log(arr);
  console.log(length);
  for (let i = 0; i < length; i++) {
    arr[i] === '9' ? console.log('aaa') : console.log('bb');
  }
  // Write your code here
}

const s = '123';

separateNumbers(s);
