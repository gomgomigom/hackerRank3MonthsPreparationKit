'use strict';

console.clear();

function countSort(arr) {
  const mid = arr.length / 2;
  for (let i = 0; i < mid; i++) arr[i][1] = '-';

  const result = new Array(Math.max(arr)).fill([]);

  for (let i = 0; i < arr.length; i++) {
    result[i];
  }

  console.log((arr[0][1] = '-'));
  console.log(arr);
  return console.log(result);
}

const arr = [
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['4', 'ij'],
  ['0', 'ab'],
  ['6', 'cd'],
  ['0', 'ef'],
  ['6', 'gh'],
  ['0', 'ij'],
  ['4', 'that'],
  ['3', 'be'],
  ['0', 'to'],
  ['1', 'be'],
  ['5', 'question'],
  ['1', 'or'],
  ['2', 'not'],
  ['4', 'is'],
  ['2', 'to'],
  ['4', 'the'],
];

countSort(arr);
