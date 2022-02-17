'use strict';

function separateNumbers(s) {
  let result = [];
  const selectedNumber = (index) => parseInt(s[index], 10);
  for (let i = 0; i < s.length; i++) {
    if (selectedNumber(i) + 1 === selectedNumber(i + 1)) {
      i === 0
        ? result.push(`${selectedNumber(i)}`, `${selectedNumber(i + 1)}`)
        : result.push(`${selectedNumber(i + 1)}`);
    }
    console.log(`ccccc${selectedNumber(i) + selectedNumber(i + 1)}`);
  }
  console.log(result);
  console.log(result === [...s]);
  result == [...s] ? (result = `YES ${result[0]}`) : (result = 'NO');
  console.log([...s]);
  return result;
}

const s = '1234';

console.log(separateNumbers(s));
