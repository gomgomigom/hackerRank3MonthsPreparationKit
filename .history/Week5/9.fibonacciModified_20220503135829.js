'use strict';

console.clear();

function fibonacciModified(t1, t2, n) {
  const arr = [t1, t2];
  const newArr = [t1, t2];
  for (let i = 0; i < n - 2; i++) {
    const next = arr[i] + arr[i + 1] ** 2;

    const add = next.toPrecision(100).replace(/\..*/, '');
    console.log(add);
    newArr.push(add);
  }
  console.log(arr);
  console.log(newArr);

  return newArr[n - 1];
}

console.log(fibonacciModified(0, 1, 12));
