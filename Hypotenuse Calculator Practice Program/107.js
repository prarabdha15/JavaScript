/*
let a;
let b;
let c;

a = window.prompt("Enter side a:");
b = window.prompt("Enter side b:");
c = Math.sqrt((a**2) + (b**2));
console.log("Hypotenuse of the triangle is: " + c);

*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    b = document.getElementById("bTextBox").value;
    c = Math.sqrt((a**2) + (b**2));
   document.getElementById("cLabel").innerHTML = "Side C: " + c ;
};