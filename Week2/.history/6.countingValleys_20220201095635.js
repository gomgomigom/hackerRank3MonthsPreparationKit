'use strict';

function countingValleys(steps, path) {
  let countValleys = 0;
  seaLevel = path.split('').reduce((pre, cur) => {
    cur === 'U' ? (cur = 1) : (cur = -1);
    pre === -1 && cur === 1 ? countValleys++ : countValleys;
    return pre + cur;
  }, 0);
  return countValleys;
  // write your code here
}

const path = 'UDDDUDUU';
const steps = path.length;

console.log(countingValleys(steps, path));
