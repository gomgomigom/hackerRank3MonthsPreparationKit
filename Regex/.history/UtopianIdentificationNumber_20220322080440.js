function processData(input) {
  const arr = input.split('\n');
  console.log(arr);
  arr.shift();
  console.log(arr);
  arr.forEach((el) => {
    console.log(/^[a-z]{0,3}\d{2,8}[A-Z]{3,}$/.test(el) ? 'VALID' : 'INVALID');
  });
}

const input = `
2
abc012333ABCDEEEE
0123AB`;

console.log(processData(input));
