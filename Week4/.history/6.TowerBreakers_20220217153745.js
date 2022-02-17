'use strict';

function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
  // const arr = new Array(n).fill(m);
  // const play = (array) => {
  //   let selected = Math.max(...array);
  //   if (selected === 1) {
  //     return 'lose';
  //   } else {
  //     for (let i = selected - 1; i > 0; i--) {
  //       if (selected % i === 0) {
  //         array[array.indexOf(selected)] = i;
  //         return (selected = i);
  //       }
  //     }
  //   }
  // };
  // let j = 1;
  // while (true) {
  //   if (play(arr) === 'lose') {
  //     if (j % 2 === 0) {
  //       return '1';
  //     } else {
  //       return '2';
  //     }
  //   }
  //   j++;
  // }
}

const n = 2;
const m = 2;
const n2 = 1;
const m2 = 4;

console.log(towerBreakers(n, m));
console.log(towerBreakers(n2, m2));
