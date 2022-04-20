'use strict';

// function getTotalX(a, b) {
//   let LCM = 1;
//   for (value of a){
//     value % LCM === 0 ? LCM = value : LCM = LCM * value
//   }

//   const GCD = ;

// }

// const a = [2, 6];
// const b = [24, 36];

// console.log(getTotalX(a, b));

const array2 = [2, 3, 4, 8];

for (let value of array2) {
  array2.forEach((i) => {
    let result;
    i % value === 0 ? (result = i / value) : (result = i);
    return result;
  });
  console.log('----------');
}
