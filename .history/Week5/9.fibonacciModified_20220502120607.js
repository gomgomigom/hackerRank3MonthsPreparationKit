'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const result = [t1, t2];

  // Write your code

  console.log(t1, t2, n);
  return result[n - 1];
}

console.log(fibonacciModified(0, 1, 6));
