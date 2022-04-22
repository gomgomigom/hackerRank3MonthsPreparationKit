'use strict';

console.clear();

function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let result = 0;
  const idx = (x) => (x ^ lastAnswer) % n;
  const query1 = (x, y) => (arr[idx(x)] = y);
  const query2 = (x, y) => {
    lastAnswer = arr[idx(x)][y % size(arr[idx(x)])];
    return (result = lastAnswer);
  };
  console.log(n, queries);
  return result;
}

console.log(
  dynamicArray(2, [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ])
);
