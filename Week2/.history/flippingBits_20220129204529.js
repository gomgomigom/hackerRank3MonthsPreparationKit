'use strict';

function flippingBits(n) {
  const answer = new Array(n.length).fill(null);
  let i = 0;
  for (let num of n) {
    num.toString(2);
  }

  return answer;
}

const n = [2147483647, 1, 0];

console.log(flippingBits(n));
