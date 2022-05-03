'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const result = [t1, t2];

  // Write your code
  for (let i = result.length; i < n; i++) {
    result.reduce((pre, cur, index) => {
      index > i && result.push(pre + cur ** 2);
      console.log(result);
      return cur;
    });
  }
  console.log(t1, t2, n);
  return result[n - 1];
}

console.log(fibonacciModified(0, 1, 6));
