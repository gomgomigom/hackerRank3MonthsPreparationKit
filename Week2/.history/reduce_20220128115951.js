const a = [1, 2, 3, 4, 5, 6, 7, 8];

result = a.reduce((acc, cur, i) => {
  console.log(`acc: ${acc}, cur: ${cur}, i: ${i}`);
  return [[acc], cur, i];
});

console.log(`result = ${result}`);
