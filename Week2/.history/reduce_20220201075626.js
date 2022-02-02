const a = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 8, 8, 7, 7, 9, 9, 9];

result = a.reduce((acc, cur, i) => {
  console.log(`acc: ${acc}, cur: ${cur}, i: ${i}`);
  return acc + cur;
}, 0);

// console.log(`result = ${result}`);

const result2 = a.reduce((x, y) => {
  console.log(`x: ${x}, y: ${y}`);
  return x ^ y;
});

console.log(result2);

const level = 0;
const test = 'UDDDUDUU';
const result1 = test.reduce(
  pre,
  cur,
  (index) => {
    cur === 'U' ? (cur = 1) : (cur = -1);
    return pre + cur;
  },
  0
);

console.log(result1);
