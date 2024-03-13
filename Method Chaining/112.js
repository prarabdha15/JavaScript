// Method chaining = calling one method after the other
// in one continuous line of code



let userName = "prarabdha";
// without method chaining
// let letter = userName.charAt(0); // p
// letter = letter.toUpperCase();  // P
// console.log(letter);

// with method chaining
let letter =userName.charAt(0).toUpperCase();
console.log(letter);

