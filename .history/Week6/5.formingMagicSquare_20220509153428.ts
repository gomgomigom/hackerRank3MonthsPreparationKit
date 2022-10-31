function formingMagicSquare(s: number[][]): number {
  return floor(
    s.reduce((pre, cur) => {
      const innerSum = cur.reduce((innerPre, innerCur) => {
        return innerPre + innerCur;
      });
      console.log(innerSum);
      return pre + innerSum;
    }, 0) / 3
  );
  console.log(s);
  // Write your code here
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
console.log(formingMagicSquare(case1));
