function processData(input) {
  const arr = input.split('\n');
  arr.shift();
  arr.forEach((el) => {
    console.log(/^[a-z]{0,3}\d{2,8}[A-Z]{3,}$/.test(el) ? 'VALID' : 'INVALID');
  });
}

const input = ['abc012333ABCDEEEE', '0123AB'];

console.log(processData(input));
