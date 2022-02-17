'use strict';

function separateNumbers(s) {
  const result = [];
  const selectedNumber = (index) => parseInt(s[index], 10);
  for (let i = 0; i < s.length; i++) {
    if (selectedNumber(i) + 1 === selectedNumber(i + 1))
      console.log(`ccccc${selectedNumber(i) + selectedNumber(i + 1)}`);
    console.log(i);
    // Write your code here
  }
}

const s = '91011';

console.log(separateNumbers(s));
