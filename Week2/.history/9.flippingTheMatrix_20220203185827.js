'use strict';

function flippingMatrix(matrix) {
  const a = matrix.size();
  console.log(matrix.size());
  const n = matrix.length / 2;
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
