'use strict';

function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      console.log(row, col);
    }
  }
  // Write your code here
  console.log(matrix);
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

console.log(flippingMatrix(matrix));
