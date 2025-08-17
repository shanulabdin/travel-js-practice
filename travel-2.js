// travel-2.js
// Basic grading system with if/else

console.log("--- Travel 2: Grading System ---");

const score = 73;
let grade = "";

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);

switch (grade) {
  case "A+":
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good job, keep improving.");
    break;
  case "C":
  case "D":
    console.log("Pass, but practice more.");
    break;
  default:
    console.log("Need more study time.");
}
