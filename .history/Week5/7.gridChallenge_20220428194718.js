'use strict';

console.clear();

function gridChallenge(grid) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const abcIndex = (abc) => alphabet.indexOf(abc);
  grid.push(grid.map((a, index) => index).join(''));

  const mapping = grid.map((arr) =>
    [...arr] == [...arr].sort((a, b) => a - b) ? true : false
  );
  console.log(mapping);

  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
