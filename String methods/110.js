let username = "Prarabdha Chandra";
let phone = "77-83-86-33-87";


console.log(username.length); //17
console.log(username.charAt(11)); // h
console.log(username.indexOf("n")); // 13
console.log(username.indexOf("o")); // -1
console.log(username.lastIndexOf("a")); // 16
console.log(username.trim()); // Prarabdha Chandra
console.log(username.toUpperCase()); // PRARABDHA CHANDRA
console.log(username.toLowerCase()); // prarabdha chandra 
console.log(phone.replaceAll("-", "")); // 7783863387
console.log(username.concat(phone)); //Prarabdha Chandra77-83-86-33-87
console.log(username.endsWith("Chandra")); //true
console.log(username.includes("Prarabdha")); //true
console.log(username.match("/[A-Z]/")); //null
console.log(username.slice(9)); //Chandra
console.log(username.split(" ")); //Chandra
console.log(username.substring(3,5)); //Chandra




