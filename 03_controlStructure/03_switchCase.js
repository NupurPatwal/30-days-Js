// task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Wrong number");
    break;
}

// Task 5:  Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks = 55;
let grade;
switch (true) {
  case marks >= 90:
    grade = "A";
    // console.log("A");
    break;

  case marks >= 80:
    grade = "B";
    // console.log("B");
    break;

  case marks >= 70:
    grade = "C";
    break;

  case marks >= 60:
    grade = "D";
    break;

  case marks >= 50:
    grade = "E";
    break;

  case marks >= 40:
    grade = "F";
    break;

  default:
    break;
}
console.log(`Score: ${marks}, Grade: ${grade}`);
