'use strict';

function rotateLeft(d, arr) {
  const rotatedArr = arr.slice(d);
  rotatedArr.push(...arr(slice(0, d)));
  // Write your code here
  console.log(arr);
  return rotatedArr;
}

const d = 4;
const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(d, arr));
