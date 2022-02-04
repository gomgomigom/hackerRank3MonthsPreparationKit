'use strict';

function marsExploration(s) {
  const SOS = 'SOS';
  for (const [value, index] of [...s].entries()) {
    console.log(value, index);
  }
  // for (let [value, index] of s.entries()) {
  //   console.log(value, index);
  // }
  // Write your code here
}

const s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));
