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

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3, 3]));

function missingNumbersUpgrade(arr, brr) {
  const mapping = (array) => {
    return array.reduce((obj, value) => {
      obj[value] ? obj[value]++ : (obj[value] = 1);
      return obj;
    }, {});
  };
  const arrMapping = mapping(arr);
  const brrMapping = mapping(brr);
  const result = [];
  console.log(arrMapping, brrMapping);
  Object.keys(arrMapping).forEach((key) => {
    brrMapping[key] - arrMapping[key] > 0 ? result.push(key) : result;
  });

  return result;
}

const arr = [1, 2];
const brr = [1, 2, 2];

console.log(missingNumbersUpgrade(arr, brr));
