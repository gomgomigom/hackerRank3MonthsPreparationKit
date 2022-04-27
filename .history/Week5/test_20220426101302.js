'use strict';

console.clear();

let num = '1233342445';

console.log(num.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
