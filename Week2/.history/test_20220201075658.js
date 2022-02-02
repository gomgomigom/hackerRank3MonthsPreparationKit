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
