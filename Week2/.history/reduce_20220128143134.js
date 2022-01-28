const a = [1, 2, 3, 4, 5, 6, 7, 8];

result = a.reduce((acc, cur, i) => {
  console.log(`acc: ${acc}, cur: ${cur}, i: ${i}`);
  return acc + cur;
}, 0);

console.log(`result = ${result}`);

const result2 = a.sort().reduce((x, y) => {
  console.log(`x: ${x}, y: ${y}`);
  return x ^ y;
});

console.log(result2);
