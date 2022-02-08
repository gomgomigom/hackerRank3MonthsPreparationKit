'use strict';
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const answer = fruits.join('');
  console.log(`Q1: ${answer}`);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(fruits[1]);
  console.log(`Q2: ${result[1]}`);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => b - a);
  // array.reverse(); 도 가능
  console.log(`Q3: ${array}`);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2);
  console.log(`Q4: ${result}`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((item) => item.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((item) => item.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.find((student) => student.score < 50);
  console.log(result && true);
  const result2 = students.some((student) => student.score < 50);
  console.log(result2);
  const result3 = !students.every((student) => student.score >= 50);
  console.log(result3);
}

// Q9. compute students' average score
{
  const result =
    students.map((student) => student.score).reduce((pre, cur) => pre + cur) /
    students.length;
  console.log(result);
  const result2 =
    students.reduce((pre, cur) => pre + cur.score, 0) / students.length;
  console.log(result2);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).join();
  result.sort((a, b) => a - b);
  console.log(result);
}
