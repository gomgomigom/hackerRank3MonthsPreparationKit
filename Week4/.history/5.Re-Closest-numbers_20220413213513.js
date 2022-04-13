'use strict';

console.clear();

// function closestNumbers(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   let min = Number.MAX_VALUE;
//   let result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       min = Math.min(arr[j] - arr[i], min);
//     }
//   }
//   console.log(min);
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       arr[j] - arr[i] === min ? result.push(arr[i], arr[j]) : result;
//     }
//   }
//   console.log(result);
// }

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let min = Number.MAX_VALUE;
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
      min = Math.min(arr[i+1] - arr[i], min);
    }
  }
  console.log(min);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] - arr[i] === min ? result.push(arr[i], arr[j]) : result;
    }
  }
  console.log(result);
}

console.log('testCase1👇');
closestNumbers([-5, 15, 25, 71, 63]);
console.log('------------------------------');
console.log('testCase2👇');
closestNumbers([5, 4, 3, 2]);
