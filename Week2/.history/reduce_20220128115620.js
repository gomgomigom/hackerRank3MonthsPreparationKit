const a = [1, 2, 3, 4, 5, 6, 7, 8];

a.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc;
});
