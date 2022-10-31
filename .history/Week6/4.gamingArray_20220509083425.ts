function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  const maxArray = [...arr].sort((a, b) => b - a);
  const uniqueMaxArray = [...new Set(maxArray)];
  while (arr.length > 0) {
    // const maxIndex: number = arr.indexOf(Math.max(...arr));
    console.log(arr);
    console.log(maxArray[i]);
    arr.splice(arr.indexOf(maxArray[i]));
    i++;
  }
  return i % 2 === 1 ? 'BOB' : 'ANDY';
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));
console.log(
  gamingArray([
    80114, 14957, 14850, 89334, 48231, 1392, 3686, 71008, 33553, 50382, 70962,
    78326, 16315,
  ])
);

let itt = [1, 2, 3];
itt.splice(0);
console.log(itt);
