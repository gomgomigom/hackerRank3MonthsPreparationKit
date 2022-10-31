function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  const maxArray = [...arr].sort((a, b) => b - a);
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
console.log(
  gamingArray([
    2156, 90629, 23857, 94325, 33447, 78537, 48772, 35902, 47202, 79445, 63982,
    4784, 68417, 3497, 90081, 36426, 86918, 30739, 95728, 31932, 7775, 14575,
  ])
);

console.log('---');

console.log('12 2141 123124 1231 231'.split(' '));
let itt = [1, 2, 3];
itt.splice(0);
console.log(itt);

function stringToNumber(str: string): number[] {
  const numberArray: number[] = [];
  str.split(' ').forEach((value) => numberArray.push(parseInt(value)));
  return numberArray;
}
