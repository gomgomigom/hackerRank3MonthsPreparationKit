function processData(input) {
  let result;
  const regex = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}/g;
  input.map(item => regex.test(item) ? (result = 'VALID') : (result = 'INVALID'))

  regex.test(input) ?
  //Enter your code here
}

const input = ['abc012333ABCDEEEE', '0123AB'];

console.log(processData(input));
