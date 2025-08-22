// travel-7.js
// Number analysis: even, odd, sum, and average

console.log("--- Travel 7: Number Analysis ---");

const numbers = [12, 5, 8, 19, 22, 7, 14, 3];
let evenCount = 0;
let oddCount = 0;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];
  sum += n;

  if (n % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

const average = sum / numbers.length;

console.log(`Numbers: ${numbers.join(", ")}`);
console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddCount}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average.toFixed(2)}`);
