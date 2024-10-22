// Arrays is a collection of items
let marks = [97, 88, 72, 64, 55];
console.log(marks);

// Loop over an array
let heroes = ["ironman", "antman", "spiderman", "batman"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// for of loop
let name = ["peta", "tera", "giga", "mega", "kilo"];
for (el of name) {
    console.log(el);
}

// PRC.QUS
let number = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of number) {
    sum += val;
}
let avg = sum / number.length;
console.log(`Average number of class is = ${avg}`);

let items = [250, 645, 300, 900, 500];
// let i = 0;
// for (let val of items) {
//     console.log(`Value at index ${i} = ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`Value after offer = ${items[i]}`);
//     i++;
// }
for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);


// Arrays method
// push(): add to end

let vege = ["potato", "onion", "cabbage"];
// vege.push("spinach", "brinjal", "cocumber");
// pop(): delete from end & return
let deletedVege = vege.pop();
console.log(vege);
console.log("Deleted", deletedVege);

// tostring(): converts array to string
let foodItems = ["burger", "pasta", "tomato",];
console.log(foodItems);
console.log(foodItems.toString());

// concat(); join multiple arrays & return result
let legends = ["Quaid-e-Azam", "Allama Iqbal", "Rehmat Ali"];
let gLegends = ["Fatima Jinnah", "Baynazir Bhuto"];

let ourHeroes = legends.concat(gLegends);
console.log(ourHeroes);

//unshift(): add to start
let girlsName = ["Emaan", "Meerab", "Romasa"]; 
  girlsName.unshift("Iqra");
  console.log(girlsName);

//   shift(): delete from start & return
let boys = ["Anas", "Zohaib", "Irfan"];
let val  =  boys.shift();
console.log("deleted", val);

// slice():  return a piece of array -> slice(startidx, endidx)
let fruits = ["orange", "apple", "banana", "mango", "mellon"];
console.log(fruits.slice(1,4));

// splice(): change original array (add, remove, replace)
let arr = [1,2,3,4,7,9];
arr.splice(2,2,43,45);

// PRC.QUS.
let companies= ["Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2,1,"Ola");
companies.push("Amazon");
  