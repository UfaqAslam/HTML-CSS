// syntax -> rules
// console.log is used to log (print) a message

console.log("Hello World");

/* Data Types
 num, null, undefined, boolean, string, BIGint, 
symbol, objects */

let age = 25;
console.log(age);

let fullName = "Ufaq Aslam";
console.log(fullName);

let x = BigInt(123);
let y = Symbol("Hello!")
isFollow = true;

/* Variable
  var, let, const 
  letters, digits, underscore & $ is allowed (not even space) */

const PI = 3.14;
console.log(PI);


//  CREATE A CONST OBJECT

const student = {
    fullName: "Ufaq Aslam",
    age: 18,
    cgpa: 3.34,
    isPass: true,
};
console.log(student.cgpa);

const profile = {
    userName: "Ufaq",
    isFollow: true,
    followers: 569,
};
console.log(profile);

profile["isFollow"] = false;
console.log(profile["isFollow"]);
