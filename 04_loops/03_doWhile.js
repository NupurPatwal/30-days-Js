/* <ul> 
    <li><strong>Task 5:</strong> Write a program to print numbers from 1 to 5 using a do...while loop.</li> 


    <li><strong>Task 6:</strong> Write a program to calculate the factorial of a number using a do...while loop.</li> 
   </ul> */

// task5 :

// let num = 1;
let i = 1;
do {
  //   console.log(i);
  i++;
} while (i <= 5);

// task 6:

let j = 1;
// let num = 5;
let fact = 1;
do {
  //   let fact = num * j;
  fact *= j;
  console.log(fact);
  j++;
} while (j <= 5);
