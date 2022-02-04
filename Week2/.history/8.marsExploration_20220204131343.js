'use strict';

function marsExploration(s) {
  const SOS = 'SOS';
  let count = 0;
  for (const [index, value] of [...s].entries()) {
    value !== SOS[index % 3] ? count++ : count;
    console.log(index, value);
  }
  return count;
}

function marsExploration2(s) {
  const SOS = 'SOS';
  s.split('').reduce((pre, cur, index => {
    console.log(pre, cur);
    return index;
  }, 0);
}

const s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));
console.log(marsExploration2(s));
