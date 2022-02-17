'use strict';

function towerBreakers(n, m) {
  const arr = new Array(n).fill(m);
  let result;
  const player = (array, playerNumber) => {
    let selected = Math.max(...array);
    if (selected === 1) {
      return playerNumber;
    } else {
      for (let i = selected - 1; i > 0; i--) {
        if (selected % i === 0) {
          array[array.indexOf(selected)] = i;
          return (selected = i);
        }
      }
    }
  };
  while (Math.max(...arr) !== 1) {
    if (player(arr, 1) === 1) {
      return '2';
    }
    if (player(arr, 2) === 2) {
      return '1';
    }
  }

  return result;
  // Write your code here
}

const n = 2;
const m = 2;
const n2 = 1;
const m2 = 4;

console.log(towerBreakers(n, m));
console.log(towerBreakers(n2, m2));
