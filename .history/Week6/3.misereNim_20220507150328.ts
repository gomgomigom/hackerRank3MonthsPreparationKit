function misereNim(s: number[]): string {
  // Write your code here
  return s.every((value) => value === 1) ? 'YES' : 'NO';
}

console.log(misereNim([1, 1, 2, 2, 3, 3]));
