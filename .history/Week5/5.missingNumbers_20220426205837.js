'use strict';

console.clear();

function missingNumbers(arr, brr) {
  const countingSort = (array) => {
    let sortedArray = new Array(10000).fill(0);
    for (let i = 0; i < arr.length; i++) sortedArray[array[i]]++;
    return sortedArray;
  };
  const brrSort = countingSort(brr);
  const arrSort = countingSort(arr);
  let result = new Array(10000).fill(0);

  for (let i = 0; i < brrSort.length; i++) {
    result[i] = brrSort[i] - arrSort[i];
  }
  // Write your code here
  return result;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
