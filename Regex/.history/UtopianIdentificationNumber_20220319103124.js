function processData(input) {
  const regex = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}/g;
  for (i of input) {
    regex.test(i) ? console.log('VALID') : (result = 'INVALID');
  }

  //Enter your code here
}

const input = ['abc012333ABCDEEEE', '0123AB'];

console.log(processData(input));
