function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  const maxArray = [...arr].sort((a, b) => b - a);
  console.log(maxArray);
  while (arr.length > 0) {
    // const maxIndex: number = arr.indexOf(Math.max(...arr));
    arr.splice(arr.indexOf(maxArray[i]));
    console.log(maxArray[i]);
    i++;
  }
  return i % 2 === 1 ? 'BOB' : 'ANDY';
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));

let itt = [1, 2, 3];
itt.splice(0);
console.log(itt);
