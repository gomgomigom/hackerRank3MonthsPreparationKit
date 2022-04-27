"use strict";
// console.log(0x11);
// let myNum: Array<number>;
// myNum = [1, 2, 3];
// console.log(myNum);
exports.__esModule = true;
var myString;
var myNum;
var myBool;
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
var strArr;
var numArr;
var boolArr;
var strNumTuple;
myString = 'Hello World';
myNum = 11;
myBool = false;
strArr = ['hi', 'hello'];
numArr = [1, 2, 3];
boolArr = [false, true, false];
strNumTuple = ['hi', 21];
var myVoid = undefined;
var myNull = null;
var myUndefined = null;
console.log(myVoid);
console.log();
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 3));
var mySum = function (num1, num2) {
    return num1 + num2;
};
console.log(mySum(3, 5));
