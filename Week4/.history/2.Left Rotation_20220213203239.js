'use strict';

function rotateLeft(d, arr) {
  const left = arr.splice(0, d);
  arr.push(left);
  return arr;
  // Write your code here
}

const d = 4;
const arr = [1, 2, 3, 4, 5];
