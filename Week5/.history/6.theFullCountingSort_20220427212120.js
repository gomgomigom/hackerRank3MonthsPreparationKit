'use strict';

console.clear();

function countSort(arr) {
  console.log(arr.length);
  console.log(arr[0][1].splice(0, 1, '-'));
  return;
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
