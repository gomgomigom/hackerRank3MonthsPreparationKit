'use strict';

console.clear();

function gridChallenge(grid) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  grid.push(grid.map((a, index) => index).flat(2));
  grid.forEach((arr, index) => console.log(arr, index));

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
