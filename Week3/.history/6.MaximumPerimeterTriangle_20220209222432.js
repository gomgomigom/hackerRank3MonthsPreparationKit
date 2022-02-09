'use strict';

function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => b - a);
  // Write your code here
}

const sticks = [1, 1, 1, 3, 3];

console.log(maximumPerimeterTriangle(sticks));
