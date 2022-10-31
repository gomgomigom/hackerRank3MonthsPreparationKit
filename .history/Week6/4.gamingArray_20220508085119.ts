function gamingArray(arr: number[]): string | undefined {
  const max: number = Math.max(...arr);
  let i: number = 0;
  while (arr.length > 0) {
    i++
    arr.splice(arr.indexOf(max));
    return arr.length === 0 ? 
    i % 2 === 1 ?
    'Bob'

}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));
