// const = a variable that can't be changed


const pi = 3.14159;
let radius;
let circumference;


radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);



pi = 420;
circumference = 2 * pi * radius;
console.log("The circumference is: ", circumference);
// Output 105.js:14 Uncaught TypeError: Assignment to constant variable.
    // at 105.js:14:4