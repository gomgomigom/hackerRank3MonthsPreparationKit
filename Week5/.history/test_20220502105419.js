'use strict';

console.clear();

let num = '123456789원';

console.log(num.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
console.log(num.replace(/(?=3)/g, ','));
console.log(num.replace(/(?<=3)/g, ','));
console.log(num.replace(/3/g, ','));

console.log(0x12);
console.log(0b11);
console.log(0xfffffff);
console.log;
console.log(parseInt(0x12));

console.clear();

let a = ['a', 'b', 'c'];
let aLen = a.length;
const test = a.reduce((pre, cur, index, array) => {
  console.log(
    `pre: ${pre} // cur: ${cur} //\n index: ${index} // array: ${array}`
  );
});

console.log(a);

console.log(1 ^ 7);
