'use strict';

function maximumPerimeterTriangle(sticks) {
  const result = new Array(3).fill(null);
  sticks.sort((a, b) => b - a);
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      return sticks[i] + sticks[i + 1] + sticks[i + 2];
    }
  }

  return result;
}

const sticks = [1, 1, 1, 3, 3];

console.log(maximumPerimeterTriangle(sticks));
// console.log(testFunction(sticks));

function testFunction(sticks) {
  sticks.sort((a, b) => b - a);
  console.log(sticks);
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
      return sticks[i] + sticks[i + 1] + sticks[i + 2];
    }
  }
}
