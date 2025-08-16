// travel-1.js
// Basic loops + percentage calculation

console.log("--- Travel 1: Student Percentage ---");

const studentName = "Ali";
const marks = [78, 86, 91, 67, 88];

let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
  console.log(`Subject ${i + 1} marks: ${marks[i]}`);
}

const maxMarks = marks.length * 100;
const percentage = (total / maxMarks) * 100;

console.log(`Student: ${studentName}`);
console.log(`Total: ${total}/${maxMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
