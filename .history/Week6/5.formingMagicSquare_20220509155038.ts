function formingMagicSquare(s: number[][]): number {
  return Math.round(
    s.reduce((pre, cur) => {
      const rowSum = cur.reduce((innerPre, innerCur) => {
        return innerPre + innerCur;
      });
      console.log(rowSum);
      return pre + rowSum;
    }, 0) / 3
  );
}

const case0 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

const case1 = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

console.log(formingMagicSquare(case0));
console.log('----');
console.log(formingMagicSquare(case1));