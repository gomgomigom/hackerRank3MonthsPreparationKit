function processData(input) {
  let result;
  const regex = /^[a-z]{,3}[0-9]{2,8}[A-Z]{3,}/;
  regex.text(input) ? (result = V) : In;
  return result;
  //Enter your code here
}

const input = 'abc012333ABCDEEEE';
const input2 = '0123AB';

console.log(processData(input));
console.log(processData(input2));
