'use strict';

function countingValleys(steps, path) {
  for (let upDown of path) {
    console.log(upDown, path);
  }
  // write your code here
}

const path = 'UDDDUDUU';
const steps = path.length;

console.log(countingValleys(steps, path));
