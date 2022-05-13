function misereNim(s: number[]): string | undefined {
  // Write your code here
  if (s.every((value) => value === 1))
    return s.length % 2 == 0 ? 'First' : 'Second';
  else return s.reduce((a, b) => a ^ b) == 0 ? 'Second' : 'First';
}

console.log(misereNim([1, 1, 2, 2, 3, 3]));
console.log(misereNim([1, 1, 1, 1]));
function gamingArray(arr) {
  let max = 0;
  let update = 0;
  arr.forEach((value) => (value > max ? ((max = value), update++) : null));
  return update % 2 === 1 ? 'BOB' : 'ANDY';
}
