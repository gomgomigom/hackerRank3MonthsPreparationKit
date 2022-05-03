'use strict';

console.clear();

function gridChallenge(grid) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const abcIndex = (abc) => alphabet.indexOf(abc);
  // grid.push(grid.map((a, index) => index).join(''));

  const mappingRow = grid.map((arr) =>
    arr == [...arr].sort().join('') ? 1 : 0
  );
  const col = [];
  for (let i = 0; i < grid.length; i++) {
    col.push(grid.map((arr, index, array) => array[index][i]).join(''));
  }

  const mappingCol = col.map((arr) =>
    arr == [...arr].sort().join('') ? 1 : 0
  );

  let result = mappingCol.concat(mappingRow).indexOf(1) < 0 ? 'NO' : 'YES';

  return result;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
