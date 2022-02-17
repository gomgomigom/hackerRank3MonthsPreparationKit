'use strict';

function towerBreakers(n, m) {
  const arr = new Array(n).fill(m);
  let result;
  const play = (array) => {
    let selected = Math.max(...array);
    if (selected === 1) {
      return 'lose';
    } else {
      for (let i = selected - 1; i > 0; i--) {
        if (selected % i === 0) {
          array[array.indexOf(selected)] = i;
          return (selected = i);
        }
      }
    }
  };
  let j = 0;
  while (Math.max(...arr) !== 1) {
    if (play(arr) === 'lose') {
      return '2';
    } else {
      return '1';
    }
  }

  // Write your code here
}

const n = 2;
const m = 2;
const n2 = 3;
const m2 = 7;

console.log(towerBreakers(n, m));
console.log(towerBreakers(n2, m2));
