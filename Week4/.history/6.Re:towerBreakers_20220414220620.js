'use strict';

console.clear();

function towerBreakers(n, m) {
  const towerArr = [];
  for (let i = 0; i < n; i++) {
    towerArr.push('⬜');
  }
  const tower = towerArr.join(' ');
  for (let j = 0; j < m; j++) {
    console.log(tower);
  }
}

console.log('testCase1👇');
towerBreakers(3, 2);
console.log('------------------------------');
console.log('testCase2👇');
towerBreakers(1, 4);
