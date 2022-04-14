'use strict';

console.clear();

function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
  const towerArr = [];
  for (let j = 0; j < m; j++) {
    towerArr.push('⬜');
  }
  const tower = towerArr.join(' ');
  for (let i = 0; i < n; i++) {
    console.log(tower);
  }
}

console.log('testCase1👇');
console.log(towerBreakers(3, 2));
console.log('------------------------------');
console.log('testCase2👇');
console.log(towerBreakers(1, 1));
