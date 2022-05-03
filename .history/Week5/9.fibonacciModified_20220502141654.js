'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const arr = [t1, t2];
  for (let i = 0; i < n; i++) {
    console.log(arr[i] + arr[i + 1] ** 2);
    arr.push(arr[i] + arr[i + 1] ** 2);
  }
  console.log(arr);

  return arr[n - 1];
}

console.log(fibonacciModified(0, 1, 6));
