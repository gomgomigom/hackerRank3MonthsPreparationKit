'use strict';

console.clear();

let num = '123456789';

console.log(num.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
console.log(num.replace(/\B(?=(\d{3})+(?!\d))/g, ','));

console.log(num.replace(/(?=3)/g, ','));
console.log(num.replace(/(?<=3)/g, ','));
console.log(num.replace(/3)/g, ','));
