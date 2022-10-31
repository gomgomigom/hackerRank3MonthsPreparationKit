function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  while (arr.length > 0) {
    const max: number = Math.max(...arr);
    i++;
    arr.splice(arr.indexOf(max));
  }
  return i % 2 === 1 ? 'BOB' : 'ANDY';
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));

let itt = [1, 2, 3];
itt.splice(0);
console.log(itt);
