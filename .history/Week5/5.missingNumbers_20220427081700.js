'use strict';

console.clear();

function missingNumbers(arr, brr) {
  const countingSort = (array) => {
    let sortedArray = new Array(10000).fill(0);
    for (let i = 0; i < array.length; i++) sortedArray[array[i]]++;
    return sortedArray;
  };

  const brrSort = countingSort(brr);
  const arrSort = countingSort(arr);
  let combinedArray = new Array(10000).fill(0);
  let result = [];

  for (let i = 0; i < brrSort.length; i++) {
    combinedArray[i] = brrSort[i] - arrSort[i];
    combinedArray[i] > 0 ? result.push(i) : result;
    // console.log(
    //   `index = ${i}, combinedArray[i] = ${combinedArray[i]}, brrSort[i] = ${brrSort[i]}, arrSort[i] = ${arrSort[i]}`
    // );
  }
  return result;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));

let brr = [7, 2, 5, 4, 6, 3, 5, 3];
const map = brr.reduce((hash, value) => {
  if (hash[value]) {
    hash[value]++;
  } else {
    hash[value] = 1;
  }

  return hash;
}, {});
