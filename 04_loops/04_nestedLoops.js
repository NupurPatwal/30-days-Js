//  Write a program to print a pattern using nested for loops:

// let rows = 3;
// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log("*");
//   }
//   console.log();
// }
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = "".repeat(rows); // Add leading spaces
  let stars = "*".repeat(i); // Add stars
  console.log(str + stars);
}
