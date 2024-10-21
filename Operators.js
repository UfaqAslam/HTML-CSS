// OPERATORS

// Arithmetic operators
//  +,-,/,*,%,**,a--,a++,--a,++a

let a = 5;
let b = 3;
console.log("a =", a, "& b =", b);
console.log("a + b =", a + b);

let x = 5;
let w = 3;
console.log("x =", x, "& w =", w);
console.log("x/w =", x / w);

//    Assignment operators
// = , += , -= , *= , %= , **=

let c = 5;
let d = 3;
c += 1;
console.log("c =", c);

//   Logical operators
//   Logical AND(&&) , Logical OR(||) , Logical NOT(!)

let y = 12;
let z = 14;
let cond1 = y < z;
let cond2 = y === z;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!(12>14) =", !(y > z));

//  Conditional statement
// if statement , if-else statement , else-if statement , 

let age = 20;
if (age > 18) {
  console.log("Make your ID Card");
}

let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

let name = "Tony";
let age1;
if(name === "shark") {
  age1 = "23";
}else if(name === "Tony") {
  age1 = "18";
}else{
    age1 = "25";
}
console.log(age1);

// Ternary Operator
// l ? m : n

let number = 33;
let result = number <= 33 ? "Pass" : "Fail";
console.log(result);

let num = prompt("Enter a number:");
if (num % 2 === 0) {
  console.log(num, " is even");
} else {
  console.log(num, " is odd");
}