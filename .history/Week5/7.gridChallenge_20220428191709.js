'use strict';

console.clear();

function gridChallenge(grid) {
  grid.forEach((arr, index) => console.log(arr, index));
  console.log(mapping);

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
