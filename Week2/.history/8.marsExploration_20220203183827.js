'use strict';

function marsExploration(s) {
  const SOS = 'SOS';
  let count = 0;
  for (const [index, value] of [...s].entries()) {
    value !== SOS[index % 3] ? count++ : count;
    console.log(index, value);
  }
  return count;
  // for (let [value, index] of s.entries()) {
  //   console.log(value, index);
  // }
  // Write your code here
}

const s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));
