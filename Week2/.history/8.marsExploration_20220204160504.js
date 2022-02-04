'use strict';

function marsExploration(s) {
  const SOS = 'SOS';
  let count = 0;
  for (const [index, value] of [...s].entries()) {
    value !== SOS[index % 3] && count++;
    console.log(index, value);
  }
  return count;
}

function marsExploration2(s) {
  const SOS = 'SOS';
  return [...s].reduce((count, cur, index) => {
    console.log(count, cur, index);
    return count + (cur !== SOS[index % 3] ? 1 : 0);
  }, 0);
}

const s = 'SOSSPSSQSSOR';

console.log(marsExploration(s));
console.log(marsExploration2(s));
