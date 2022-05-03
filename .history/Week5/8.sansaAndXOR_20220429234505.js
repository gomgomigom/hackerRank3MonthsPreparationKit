'use strict';

console.clear();

function sansaXor(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr);
      arr[j] && arr.push(arr[i] ^ arr[j]);
    }
  }
  return;
}

console.log(sansaXor(1, 2, 3));
console.log(sansaXor(4, 5, 7, 5));
