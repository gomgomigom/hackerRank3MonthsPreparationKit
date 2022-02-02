'use strict';
const valleyCount = 0;
const test = 'UDDDUDUU';
const test1 = test.split('');
let result1 = test1.reduce((pre, cur) => {
  cur === 'U' ? (cur = 1) : (cur = -1);
  console.log(`pre: ${pre}, cur: ${cur}`);
  pre === -1 && cur === 1 ? valleyCount++ : valleyCount;
  console.log(valleyCount);
  return pre + cur;
}, 0);

console.log(result1);
