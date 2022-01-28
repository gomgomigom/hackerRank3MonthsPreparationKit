'use strict';

function gradingStudents(grades) {
  for (let score of grades) {
    if (score < 38) {
      console.log(score);
    } else if (score % 5 < 3) {
      console.log(score + (score % 5));
    } else {
      console.log(score);
    }
  }
  // Write your code here
}

const grades = [73, 67, 38, 33];
