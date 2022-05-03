'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const arr = [t1, t2];
  const result = [];
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + arr[i + 1] ** 2);
  }

  return result[n - 1];
}

console.log(fibonacciModified(0, 1, 6));
