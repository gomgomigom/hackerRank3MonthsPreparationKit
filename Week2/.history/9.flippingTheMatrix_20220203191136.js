'use strict';

function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let total = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = 0;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][2 * n - col - 1], max);
      max = Math.max(matrix[2 * n - row - 1]);
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
