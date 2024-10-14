// Arrays is a collection of items
 let marks =[97, 88, 72, 64, 55];
 console.log(marks);

// Loop over an array
let heroes =["ironman", "antman", "spiderman", "batman"];

for(let i = 0; i<heroes.length; i++){
    console.log(heroes[i]);
}

// for of loop
let name = ["peta", "tera", "giga", "mega", "kilo"];
for(el of name) {
console.log(el);
}

// PRC.QUS
let number =[85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of number) {
    sum += val;
}
let avg = sum / number.length;
console.log(`Average number of class is = ${avg}`);



