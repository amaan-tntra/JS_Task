// Input array
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 58 },
  { name: "David", score: 74 }
];

// Function to calculate average score
function getAverageScore(students) {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}

// Function to find highest and lowest scores
function getHighLowScores(students) {
  const highest = students.reduce((max, student) =>
    student.score > max.score ? student : max
  );
  const lowest = students.reduce((min, student) =>
    student.score < min.score ? student : min
  );
  return { highest, lowest };
}

// Function to calculate grade distribution
function getGradeDistribution(students) {
  const grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  students.forEach(student => {
    const score = student.score;
    if (score >= 90) grades.A++;
    else if (score >= 80) grades.B++;
    else if (score >= 70) grades.C++;
    else if (score >= 60) grades.D++;
    else grades.F++;
  });

  return grades;
}

// Function to get list of students who need to retake
function getRetakeStudents(students) {
  return students.filter(student => student.score < 60).map(student => student.name);
}

// Main execution
const average = getAverageScore(students);
const { highest, lowest } = getHighLowScores(students);
const gradeDistribution = getGradeDistribution(students);
const retakeStudents = getRetakeStudents(students);

// Output
console.log("Average Score:", average);
console.log(`Highest Score: ${highest.name} (${highest.score})`);
console.log(`Lowest Score: ${lowest.name} (${lowest.score})`);
console.log("Grade Distribution:", gradeDistribution);
console.log("Students needing retake:", retakeStudents);
