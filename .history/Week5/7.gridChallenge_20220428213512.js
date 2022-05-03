'use strict';

console.clear();

// function gridChallenge(grid) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const abcIndex = (abc) => alphabet.indexOf(abc);
//   // grid.push(grid.map((a, index) => index).join(''));

//   const mappingRow = grid.map((arr) =>
//     arr == [...arr].sort().join('') ? 1 : 0
//   );
//   const col = [];
//   for (let i = 0; i < grid.length; i++) {
//     col.push(grid.map((arr, index, array) => array[index][i]).join(''));
//   }

//   const mappingCol = col.map((arr) =>
//     arr == [...arr].sort().join('') ? 1 : 0
//   );
//   console.log(grid);
//   console.log(mappingRow);
//   console.log(col);
//   console.log(mappingCol);
//   let result = mappingCol.indexOf(0) < 0 ? 'YES' : 'NO';
//   return result;
// }

function gridChallenge(grid) {
  const mappingGrid = grid.map((arr) => [...arr].sort().join(''));
  const col = [];
  for (let i = 0; i < grid.length; i++) {
    col.push(grid.map((arr, index, array) => array[index][i]).join(''));
  }
  console.log(col);
  const testCol = col.map((arr) => (arr === [...arr].sort().join('') ? 1 : 0));

  return mappingGrid;
}

const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'];

console.log(gridChallenge(grid));
