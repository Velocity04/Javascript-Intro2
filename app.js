function add(a,b) {
    return a + b;
}
function substract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function modulus(a,b) {
    return a % b;
}

function askUser() {
let a = parseInt(prompt("Enter first number: "));
let operator = prompt("operator: +,-,*,/");
let b = parseInt(prompt("Enter second number: "));
let result;

if(operator === "+")
{
    result = add(a,b);
} else if(operator === "-")
{
    result = subtract(a,b);
} else if(operator === "*")
{
    result = multiply(a,b);
} else if(operator === "/")
{
    result = divide(a,b);

} else if (operator === "%") {
    result = modulus(a,b);
} 
else {
    prompt("Input a valid operator")
}
alert(result);
}
askUser();
alert(console.log("Please enter a valid operator"));


// alert("the result is : ${num1} ${opr} ${num2} = ${result}")``