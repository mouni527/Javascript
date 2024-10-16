
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        return "Division by zero is undefined";
    }
    return a / b;
}


function modulus(a, b) {
    if (b === 0) {
        return "Modulus by zero is undefined";
    }
    return a % b;
}


let n1 = 10;
let n2 = 5;

console.log("Addition: " + add(n1, n2));          
console.log("Subtraction: " + subtract(n1, n2));  
console.log("Multiplication: " + multiply(n1, n2)); 
console.log("Division: " + divide(n1, n2));       
console.log("Modulus: " + modulus(n1, n2));       
