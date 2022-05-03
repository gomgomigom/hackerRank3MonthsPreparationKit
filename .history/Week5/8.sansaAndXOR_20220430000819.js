'use strict';

console.clear();

function sansaXor(arr) {
  const newArr = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] && newArr.push([...arr].slice(i, j + 1));
    }
  }
  const result = newArr.flat().reduce((pre, cur) => pre ^ cur);
  return result;
}

console.log(sansaXor([1, 2, 3]));
console.log(sansaXor([4, 5, 7, 5]));
