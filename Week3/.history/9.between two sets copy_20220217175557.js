'use strict';

function getTotalX(a, b) {
  // Write your code here
  let result = 0;
  let index = 1;
  let cloneA = a.splice(1, a.length); // clone new array of a but not a[0]
  while (a[0] * index <= b[0]) {
    if (
      cloneA.every((item) => (a[0] * index) % item === 0) &&
      b.every((item) => item % (a[0] * index) === 0)
    ) {
      result++;
    }
    index++;
  }
  return result;
}

const a = [2, 6];
const b = [24, 36];

let i = 0;
while (i < 1) {
  console.log(getTotalX(a, b));
  i++;
}
