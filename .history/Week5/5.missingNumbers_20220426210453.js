'use strict';

console.clear();

function missingNumbers(arr, brr) {
  const countingSort = (array) => {
    let sortedArray = new Array(10).fill(0);
    for (let i = 0; i < array.length; i++) sortedArray[array[i]]++;
    return sortedArray;
  };
  const brrSort = countingSort(brr);
  console.log(brrSort);
  const arrSort = countingSort(arr);
  let combindeArray = new Array(10).fill(0);
  

  for (let i = 0; i < brrSort.length; i++) {
    combindeArray[i] = brrSort[i] - arrSort[i];
    combindeArray[i] > 0 ? 
    console.log(
      `index = ${i}, combindeArray[i] = ${combindeArray[i]}, brrSort[i] = ${brrSort[i]}, arrSort[i] = ${arrSort[i]}`
    );
  }
  // Write your code here
  return combindeArray;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]));
