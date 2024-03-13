// let x = Math.floor(Math.random() * 6); // Generates random whole numbers from 0 to 6
let x;
let y;
let z; 

document.getElementById("rollBtn").onclick = function () {
    x = Math.floor(Math.random() * 6) + 1; 
    y = Math.floor(Math.random() * 6) + 1; 
    z = Math.floor(Math.random() * 6) + 1; 

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;

}