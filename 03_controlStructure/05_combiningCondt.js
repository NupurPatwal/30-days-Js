// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let leap = 2024;

if ((leap % 4 == 0 && leap % 100 != 0) || leap % 400) {
  console.log(`${leap} is a leap year`);
} else {
  console.log(`${leap} is a not leap year`);
}
