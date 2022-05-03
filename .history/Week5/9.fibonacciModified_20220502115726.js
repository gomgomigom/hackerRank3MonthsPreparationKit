'use strict';

function fibonacciModified(t1, t2, n) {
  const result = [];
  // Write your code here
  result.reduce((pre, cur, index) => {
    result.push(pre + cur ** 2);
    console.log(result);
    return cur;
  });
  console.log(t1, t2, n);
  return result[n - 1];
}

console.log(fibonacciModified(0, 1, 5));
