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

const s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));
