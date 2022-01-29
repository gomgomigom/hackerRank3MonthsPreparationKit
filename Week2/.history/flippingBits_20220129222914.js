'use strict';

function flippingBits(n) {
  const answer = new Array(n.length).fill(null);
  let i = 0;
  for (let num of n) {
    answer[i] = (num >>> 0).toString(2);
    i++;
  }

  return ~n >>> 0;
}

const n = [2147483647, 1, 0];

function flippingBits2(n) {
  // String solution
  const flipped = parseInt(n)
    .toString(2)
    .padStart(32, '0') // Convert to 32-bit binary string
    .split('')
    .map((bit) => (bit === '0' ? '1' : '0'))
    .join(''); // Flip bits

  return parseInt(flipped, 2); // Convert back to decimal
}

function flippingBits3(n) {
  return Math.pow(2, 32) - n - 1;
}
console.log(`1: ${flippingBits(n)}`);
