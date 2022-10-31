function gamingArray(arr: number[]): string | undefined {
  const max: number = Math.max(...arr);
  let i: number = 0;
  while (arr.length > 0) {
    arr.splice(arr.indexOf(max));
  }
  return 's';
  // Write your code here
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));
