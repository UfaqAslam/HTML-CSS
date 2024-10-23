/* LOOPS
 for loop */

for (let i = 1; i <= 10; i++) {
    console.log("Hello!");
}
console.log("loop has ended");

// Calculate sum of 1 to 100

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("sum =", sum);

// While loop

let i = 1;
while (i <= 5) {
    console.log("i =", i);
    i++;
}

// Do-While loop (run at least one time)

let a = 1;
do {
    console.log("a =", a);
    a++;
}
while (a <= 5);

// for-of Loop are used in string & array (iterator -> character)  

let str = "Ufaq"
for (let i of str) {
    console.log("i =", i)
}

let name = "Javascript"
let size = 0;
for (let val of name) {
    console.log("val =", val)
    size++;
}
console.log("string size =", size);

// for-in Loop are used in object

let student = {
    name: "Hamd",
    age: 18,
    cgpa: 8.2,
    isPass: true,
};

for (let key in student) {
    console.log("key =", key, "val =", student[key]);
}

// PRACTICE QUESTIONS
// Print all even numbers from 0 to 100

for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0)
        console.log("num =", num);
}

// PRC. QUS.2

let gameNum = 18;

let userNum = prompt("Guess the number");
while (gameNum != userNum) {
    userNum = prompt("You entered a wrong  number. Guess again");
}
console.log("Congratulations, you entered the right number");

//   STRING  is a sequence of characters used to reprsent a text
// Position is also called index or indices

let str1 = "Romasa";
console.log(str1[1]);

// Template Literal (String Interpolation) -> a way to have embedded expressions in strings

let obj = {
    item: "Apple",
    price: 30,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("The cost of", obj.item, "is", obj.price, "rupees");

// Escape characters
// \n next line,  \t  tab space
console.log("Ufaq\nHamd");

let stu = "Emaan\nRome";
console.log(stu.length);

// String method (string are immutable -> unchanged)
// str.toUpperCase

let college = "AssociateCollege";
let newcollege = college.toUpperCase();
console.log(college);
console.log(newcollege);

// str.toLowerCase

let Str = "GreenTea";
let newStr = Str.toLowerCase();
console.log(Str);
console.log(newStr);

// str.trim (removes whitespaces of Starting and End)

let country = "     America and  Canada     ";
console.log(country.trim());

// str.slice(start,end?)

let num = "01234678";
console.log(num.slice(3, 6));

// str1.concat(str2)  (join two strings)

let Str1 = "Maha";
let Str2 = "Nadeem";
let result = Str1.concat(Str2);

console.log(result);

// str.replace(searchval, newval)

let word = "beat";
console.log(word.replace("b", "m"));

// str.charAt(idx)

let flowerName = "Rose";
flowerName = flowerName.replace("R", "P");
console.log(flowerName);
console.log(flowerName.charAt(3));

// Prc.Qus.

let fullName = prompt("Enter your full name without spaces");
let newName = "@" + fullName + fullName.length;
console.log(newName);