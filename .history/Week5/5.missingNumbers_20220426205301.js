'use strict';

console.clear();

function missingNumbers(arr, brr) {
  const countingSort = (array) => {
    let sortedArray = new Array(10000).fill(0);
    for (let i = 0; i < arr.length; i++) {}
    return sortedArray;
  };
  console.log(countingSort(arr));
  console.log(arr);
  console.log(brr);
  // Write your code here
  return arr;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
