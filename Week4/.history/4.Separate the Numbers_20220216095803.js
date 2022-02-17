'use strict';

function separateNumbers(s) {
  const result = [];
  const selectedNumber = (index) => parseInt(s[index], 10);
  for (let i = 0; i < s.length; i++) {
    if (selectedNumber(i) + 1 === selectedNumber(i + 1)) {
      i === 0
        ? result.push(selectedNumber(i), selectedNumber(i + 1))
        : result.push(selectedNumber(i + 1));
    }
    console.log(`ccccc${selectedNumber(i) + selectedNumber(i + 1)}`);
    
    console.log(i);
    // Write your code here
  }
  result === [...s] ? result = `YES ${result[0]}`
  return result;
}

const s = '1234';

console.log(separateNumbers(s));
