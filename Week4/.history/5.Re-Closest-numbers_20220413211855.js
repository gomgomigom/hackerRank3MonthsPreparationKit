'use strict';

console.clear();

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let min = MAX_VALUE;
  console.log(min);
}

closestNumbers([-5, 15, 25, 71, 63]);
closestNumbers([5, 4, 3, 2]);
