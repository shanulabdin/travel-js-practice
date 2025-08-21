// travel-6.js
// Find leap years in a range

console.log("--- Travel 6: Leap Years ---");

const startYear = 2000;
const endYear = 2030;
let count = 0;

for (let year = startYear; year <= endYear; year++) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeap) {
    console.log(`${year} is a leap year`);
    count++;
  }
}

console.log(`Total leap years between ${startYear} and ${endYear}: ${count}`);
