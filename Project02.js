//Program to add two number
function add(x, y)
{
    return x+y;
}
let num1= prompt("Enter the first number : ");
num1 = Number.parseInt(num1);
let num2 = prompt("Enter the second number :" );
num2 = Number.parseInt(num2);

let result=  add(num1, num2);
console.log(result);