function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  const maxArray = [...arr].sort((a, b) => a - b);
  while (arr.length > 0) {
    const maxIndex: number = arr.indexOf(Math.max(...arr));
    i++;
    arr.splice(maxIndex);
  }
  return i % 2 === 1 ? 'BOB' : 'ANDY';
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));

let itt = [1, 2, 3];
itt.splice(0);
console.log(itt);
