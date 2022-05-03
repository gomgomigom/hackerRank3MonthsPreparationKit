'use strict';

console.clear();

function gridChallenge(grid) {
  const map = grid.map((value, index) => value, index);
  console.log(map);

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
