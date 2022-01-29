'use strict';

function flippingBits(n) {
  const answer = n.toString(2);

  return answer;
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
console.log(`2: ${flippingBits2(n)}`);
console.log(`3: ${flippingBits3(n)}`);
let a = 12345.toString(2);
console.log(a); // 1111101
