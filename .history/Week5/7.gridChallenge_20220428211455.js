'use strict';

console.clear();

function gridChallenge(grid) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const abcIndex = (abc) => alphabet.indexOf(abc);
  // grid.push(grid.map((a, index) => index).join(''));

  const mappingRow = grid.map((arr) =>
    arr == [...arr].sort().join('') ? 1 : 0
  );
  const Col = [];
  for (let i = 0; i < grid.length; i++) {
    Col.push(grid.map((arr, index, array) => array[index][i]).join(''));
  }
  console.log('---');
  console.log(mappingCol);
  console.log('---');
  console.log(mappingRow);
  console.log([...'fghij'].sort());
  return grid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
