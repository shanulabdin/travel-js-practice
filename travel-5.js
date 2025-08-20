// travel-5.js
// Shopping bill + discount percentage

console.log("--- Travel 5: Shopping Discount ---");

const items = [450, 1200, 300, 950];
let bill = 0;

for (const price of items) {
  bill += price;
}

let discountRate = 0;
if (bill >= 2000) {
  discountRate = 15;
} else if (bill >= 1000) {
  discountRate = 10;
} else {
  discountRate = 5;
}

const discountAmount = (bill * discountRate) / 100;
const finalBill = bill - discountAmount;

console.log(`Original Bill: Rs. ${bill}`);
console.log(`Discount: ${discountRate}%`);
console.log(`You saved: Rs. ${discountAmount}`);
console.log(`Final Bill: Rs. ${finalBill}`);
