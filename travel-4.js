// travel-4.js
// Attendance percentage checker

console.log("--- Travel 4: Attendance Percentage ---");

const totalClasses = 120;
const attendedClasses = 94;

const attendancePercent = (attendedClasses / totalClasses) * 100;

console.log(`Total classes: ${totalClasses}`);
console.log(`Attended classes: ${attendedClasses}`);
console.log(`Attendance: ${attendancePercent.toFixed(2)}%`);

if (attendancePercent >= 75) {
  console.log("You are allowed to sit in exams.");
} else {
  console.log("Attendance is low. Talk to your teacher.");
}
