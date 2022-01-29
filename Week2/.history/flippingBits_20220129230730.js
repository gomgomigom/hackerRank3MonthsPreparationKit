'use strict';

function flippingBits(n) {
  const flipped = parseInt(n, 10)
    .toString(2)
    .padStart(32, '0')
    .split('')
    .map((num) => (num === '0' ? '1' : '0'))
    .join('');

  console.log([answer]);

  return flipped;
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

let a = 123;
console.log(a.toString().split(''));
console.log(a);
console.log(
  a
    .toString()
    .split('')
    .map((b) => (b === '1' ? 2 : b))
    .join('')
);
