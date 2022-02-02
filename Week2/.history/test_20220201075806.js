'use strict';
const level = 0;
const test = 'UDDDUDUU';
let result1 = test.reduce((pre, cur) => {
  cur === 'U' ? (cur = 1) : (cur = -1);
  return pre + cur;
}, 0);

console.log(result1);
