'use strict';

function pangrams(s) {
  const upper = s.toUpperCase();
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  console.log(upper);
  console.log(alphabet);
  // Write your code here
}

const s = 'We promptly judged antique ivory buckles for the next prize';

console.log(pangrams(s));
