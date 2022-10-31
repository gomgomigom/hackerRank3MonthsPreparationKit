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
  const numberArray = [];
  str.split(' ').forEach((value) => numberArray.push(parseInt(value)));
  return numberArray;
}

console.log(
  stringToNumber(
    '65194 8115 6117 29036 32362 61968 33097 8933 48404 20798 22878 79156 12529 85569 6694 2312 95138 48680 83657 61801 67326 14165 92214 4546 84948 27986 88208 57285 60345 19284 2502 81434 95271 64223 38949 53020 26690 15360 95263 53404 36099 43951 58886 53245 42341 71994 74035 66042 78917 26868 23754 47366'
  )
);
