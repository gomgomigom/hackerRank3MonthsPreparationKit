function misereNim(s: number[]): string {
  // Write your code here
  if (s.every((value) => value === 1))
    return s.length % 2 == 0 ? 'First' : 'Second';
}

console.log(misereNim([1, 1, 2, 2, 3, 3]));
console.log(misereNim([1, 1, 1, 1]));
