'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const arr = [t1, t2];
  for (let i = 0; i < n - 2; i++) {
    const next = arr[i] + arr[i + 1] ** 2;

    console.log(next.toPrecision(100).replace(/\..*/, '').toString());
    arr.push(next.toPrecision(100).replace(/\..*/, '').toString());
  }
  console.log(arr);

  return arr[n - 1];
}

console.log(fibonacciModified(0, 1, 13));
