'use strict';

console.clear();

function gridChallenge(grid) {
  const a = 'abcde';
  [...a].forEach((item) => console.log(item));

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
