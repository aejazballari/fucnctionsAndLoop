// ===============================================================================================================
// *********** GRADE AND PERCENTAGE ASSIGNMENT ************

// function status(value) {
//     if(value < 35){
//         let grade ="fail";
//         return grade;
//     } else if (value < 50) {
//         let grade = "3rd class";
//         return grade;
//     } else if (value < 60) {
//         let grade = "2nd class";
//         return grade;
//     } else if (value < 75) {
//         let grade = "1st class";
//         return grade;
//     } else {
//         let grade = "distinction";
//         return grade;
//     }
// }

// function list(name, percentage) {
//     console.log("Name: " + name + ", Percentage: " + percentage + "%, " + "Grade: " + status(percentage) + ".");
// }

// list("Aejaz", 60);


// =================================================================================================================
// *********** CONVERT TEMPERATURE ASSIGNMENT ************


// function temperature(celius){
//     let fahrenheit = celius * (9/5) + 32;
//     console.log("Temperature: " + fahrenheit + " F");
// };

// temperature(20);

// ==================================================================================================================
// *********** FOR LOOP ASSIGNMENT ************
// WRITING A PROGRAM OF 5 TABLE

// for (let x=1; x<=10; x++) {
//     let value = 5 * x; 
//     console.log(value);
// }

// ==================================================================================================================
// *********** WHILE LOOP ASSIGNMENT ************
// WRITING A PROGRAM OF FIRST 5 EVEN NUMBERS

// let x = 2;
// while(x<=10){
//     console.log(x);
//     x+=2;
// }

// ==================================================================================================================

// *********** DO WHILE LOOP ASSIGNMENT ************
// WRITING A PROGRAM PRINTING TEXT FOR MULTIPLE TIMES

let x = 5;
do{
    console.log("Hello there!");
    x++;
}while(x<10);