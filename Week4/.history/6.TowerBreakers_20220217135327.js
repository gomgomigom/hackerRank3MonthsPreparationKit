'use strict';

function towerBreakers(n, m) {
  const arr = new Array(n).fill(m);
  let result;
  const P1 = (array) => {
    let selected = Math.max(...array);
    for (let i = selected - 1; i > 0; i--) {
      if (selected % i === 0) {
        return (selected = i);
      } else {
        return (selected = 'P1');
      }
    }
  };
  P1(arr);
  console.log(arr);
  console.log(selected);
  return result;
  // Write your code here
}

const n = 2;
const m = 2;
const n2 = 1;
const m2 = 4;

console.log(towerBreakers(n, m));
console.log(towerBreakers(n, m2));