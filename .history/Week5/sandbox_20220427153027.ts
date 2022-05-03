// console.log(0x11);
// let myNum: Array<number>;
// myNum = [1, 2, 3];
// console.log(myNum);

let myString: string;
let myNum: number;
let myBool: boolean;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello World';
myNum = 11;
myBool = false;

strArr = ['hi', 'hello'];
numArr = [1, 2, 3];
boolArr = [false, true, false];

strNumTuple = ['hi', 21];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;

console.log(myVoid);

console.log();

function getSum(num1, num2) {
  return num1 + num2;
}

export {};
