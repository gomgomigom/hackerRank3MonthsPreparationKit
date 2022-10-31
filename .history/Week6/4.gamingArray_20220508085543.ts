function gamingArray(arr: number[]): string | undefined {
  const max: number = Math.max(...arr);
  let i: number = 0;
  while (arr.length > 0) {
    i++;
    console.log(arr);
    arr.splice(arr.indexOf(max));
    if (arr.length === 0) {
      console.log(arr, i);
      return i % 2 === 1 ? 'Bob' : 'Andy';
    }
  }
}

console.log(gamingArray([5, 2, 6, 3, 4]));
console.log(gamingArray([3, 1]));

let itt = [1, 2, 3];
console.log([1, 2, 3].splice(0));
