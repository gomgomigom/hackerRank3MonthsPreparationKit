'use strict';

function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => b - a);
  console.log(sticks);
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      return sticks[i] + sticks[i + 1] + sticks[i + 2];
    }
  }
  // Write your code here
}

function testFunction(sticks) {
  sticks.sort((a, b) => b - a);
}

const sticks = [1, 1, 1, 3, 3];

console.log(maximumPerimeterTriangle(sticks));
