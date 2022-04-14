'use strict';

console.clear();

function towerBreakers(n, m) {
  const tower = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {}
    tower.push('⬜');
  }
  console.log(`⬜`);
  // Write your code here
}

console.log('testCase1👇');
console.log(towerBreakers(2, 2));
console.log('------------------------------');
console.log('testCase2👇');
console.log(towerBreakers(1, 4));
