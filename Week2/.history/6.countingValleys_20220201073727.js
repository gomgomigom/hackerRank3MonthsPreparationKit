'use strict';

function countingValleys(steps, path) {
  let level = 0;
  let valleyCount = 0;
  for (let upDown of path) {
    upDown === 'U' ? level++ : level--;
    console.log(`level: ${level}`);
    console.log(upDown, path);
  }
  // write your code here
}

const path = 'UDDDUDUU';
const steps = path.length;

console.log(countingValleys(steps, path));
