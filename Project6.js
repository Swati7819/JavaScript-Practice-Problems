//swapping two number
//without using third variable
let a = prompt("Enter first number : ");
a = Number.parseInt(a);

let b = prompt("Enter first number : ");
b = Number.parseInt(b);

//swapping
// a=a+b;
// b=a-b;
// a=a-b;
// document.write(a,b);

//with using third variable
let temp = a;
a=b;
b = temp;

document.write(a,b);

