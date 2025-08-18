// travel-3.js
// Multiplication tables using loops

console.log("--- Travel 3: Multiplication Tables ---");

for (let table = 2; table <= 4; table++) {
  console.log(`\nTable of ${table}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
  }
}
