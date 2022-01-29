'use strict';

function flippingBits(n) {
  const answer = new Array(n.length).fill(null);
  for (let i of n) {
    i.toString(2);
  }

  return answer;
}

const n = [2147483647, 1, 0];

console.log(flippingBits(n));
