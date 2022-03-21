function processData(input) {
  let result;
  const regex = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}/g;

  regex.test(input) ? (result = 'VALID') : (result = 'INVALID');
  return result;
  //Enter your code here
}

const input = ['abc012333ABCDEEEE', '0123AB'];

console.log(processData(input));