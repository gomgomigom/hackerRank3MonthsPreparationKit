'use strict';

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  // Write your code here
  console.log(arr);
}

closestNumbers([-5, 15, 25, 71, 63]);
closestNumbers([5, 4, 3, 2]);
