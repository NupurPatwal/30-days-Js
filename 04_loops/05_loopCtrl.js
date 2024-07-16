// Task 8:  Write a program to print numbers from 1 to 10, but skip the number 5 using the

for (let i = 1; i <= 10; i++) {
  if (i % 5 == 0) {
    continue;
  }
  console.log(i);
}

//  task 9:  Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the
for (let j = 0; j <= 10; j++) {
  if (j == 7) {
    break;
  }
  console.log(j);
}
