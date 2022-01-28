'use strict';

function gradingStudents(grades) {
  let scoreArray = new Array(grades.length).fill(null);
  let i = 0;
  for (let score of grades) {
    if (score < 38) {
      scoreArray[i] = score;
    } else if (score % 5 > 2) {
      score = score + (5 - (score % 5));
      scoreArray[i] = score;
    } else {
      scoreArray[i] = score;
    }
    i++;
  }
  return scoreArray;
}

const grades = [73, 67, 38, 33];

gradingStudents(grades);
