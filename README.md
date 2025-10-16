You are given an array of student objects, each containing a name and a score.

You need to calculate:

The average score of the class

The highest and lowest scores (with student names)

The count of students in each grade category:

A (90–100)

B (80–89)

C (70–79)

D (60–69)

F (<60)

A list of students who need to retake the exam (score < 60)



Example Input:



const students = [
{ name: "Alice", score: 85 },
{ name: "Bob", score: 92 },
{ name: "Charlie", score: 58 },
{ name: "David", score: 74 }
];



Expected Output:



Average Score: 77.25
Highest Score: Bob (92)
Lowest Score: Charlie (58)
Grade Distribution: { A: 1, B: 1, C: 1, D: 0, F: 1 }
Students needing retake: [ 'Charlie' ]





Milestone Name	Milestone Name
Identify Highest & Lowest Scores	20 %
Count Grade Categories (A–F)	25 %
List Students Who Need Retake (<60)	15 %
Display Results Clearly	10 %
Code Quality & Efficiency	10 %
Calculate Class Average	20 %
Action Item Guidelines
Use only vanilla JavaScript (no external libraries).

Define your logic inside a function like analyzeGrades(students).

Use loops and if-else conditions to determine grade categories.

Keep your code modular, readable, and consistent.

Use template literals for output formatting.

Do not use any AI tool

Prerequisite
You should be comfortable with:

JavaScript Arrays (loops, iteration methods)

Objects (accessing and updating properties)

Functions (parameters, return values)

Conditional Statements (if, else if, else)

Basic Math operations



Submission: Submit your completed solution via a public GitHub repository link. Include your JS file (e.g., gradeAnalyzer.js) and a README.md explaining your logic and sample output.

Skills
Javascript
JavaScript Syntax & Basics