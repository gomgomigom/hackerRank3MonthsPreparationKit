function gamingArray(arr: number[]): string | undefined {
  let i: number = 0;
  while (arr.length > 0) {
    const max: number = Math.max(...arr);
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
itt.splice(0);
console.log(itt);
