'use strict';

function anagram(s) {}

anagram('aaabbb');
anagram('ab');
anagram('abc');
anagram('mnop');
anagram('xyyx');
anagram('xaxbbbxx');

// function anagram(s){
//   const len = s.length
//   if(len % 2 == 1) return -1
//   let sub1 = s.substring(0,len/2), sub2 = s.substring(len/2,len)
//   let count = 0
//   sub2.split('').filter(x=> sub1.includes(x) ? (sub1 = sub1.replace(x,'')) : count++)
//   return count
// }

// function anagram(s) {
//   var n = s.length;
//   if (n % 2 !== 0) {
//     return -1;
//   }
//   var a = s.slice(0, n / 2);
//   var b = s.slice(n / 2);
//   var count = 0;
//   for (let i = 0; i < n / 2; i++) {
//     a.includes(b[i]) ? (a = a.replace(b[i], '')) : count++;
//   }
//   return count;
// }
