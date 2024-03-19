//To calulate area of regular triangle
let side1 = prompt("Enter the side 1");
side1= Number.parseInt(side1)

let side2 = prompt("Enter the side 1");
side2= Number.parseInt(side2)

let side3 = prompt("Enter the side 1");
side3= Number.parseInt(side3)

const s = (side1+side2+side3)/2

const area = Math.sqrt((s*(s-side1)*(s-side2)*(s-side3)))


document.write(area);