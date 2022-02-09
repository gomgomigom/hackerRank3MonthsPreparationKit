'use strict';

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

ar.sort((a, b) => {
  console.log(`a: ${a}, b: ${b}, a-b: ${b - a}`);
  return b - a;
});
console.log(ar);

const contacts = {
  familyName: '이',
  name: '영희',
  age: 22,
};

let { familyName: familyName, name: otherName, age } = contacts;

// 영희
console.log(name);
