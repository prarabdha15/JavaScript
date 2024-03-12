// A variable is a storage for containing data
// A variable behaves as it was the value it contains


// Two steps : 
// 1. Decleration (var, let, const)
// 2. Assignment (= *assignment operator)

let age;
console.log(age);
// Output is "undefiend"

age = 21; //number
console.log(age);
// Output is "21"

age = age +1;
console.log(age);
// Output is "22"
let firstName = "Prarabdha";  //strings
console.log(firstName);
// Output is "Prarabdha"

let student = true;  //boolean
console.log(student);
// Output is "true"


document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + age + " years old";

