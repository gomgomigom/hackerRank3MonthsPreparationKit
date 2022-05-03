'use strict';

console.clear();

function gridChallenge(grid) {
  const mapping = grid.map((value, index) => value + index);
  console.log(mapping);

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
