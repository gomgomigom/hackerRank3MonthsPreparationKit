function processData(input) {
  const regex = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}/g;
  const inputValue = input.split(' ');
  for (i of input) {
    regex.test(i) ? console.log('VALID') : console.log('INVALID');
  }

  //Enter your code here
}

const input = ['abc012333ABCDEEEE', '0123AB'];

console.log(processData(input));
