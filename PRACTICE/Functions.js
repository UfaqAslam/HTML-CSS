// Block of code that perform specific task, can be invoked (called) whenever needed
// Function Definition
function myFunction() {
  console.log("I am learning JAVASCRIPT");
}
// Function called   parameters -> input
myFunction();

function ourFunction(msg) {
  console.log(msg);
}
ourFunction("I love JS"); // argument

// 2 numbers, sum
function sum(a, b) {
  s = a + b;
  return s;
}
let val = sum(101, 201);
console.log("value", val);

// Arrow Functions -> compact(small) way of writing a function
// Multiplication method
let arrowMul = (x, y) => {
  console.log(x * y);
  return x * y;
};

// PRC. QUS.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    )
      count++;
  }
  console.log(count);
}

// Arrow function
let countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// for each loop in JS -> (Higher Order Function (used other func. as parameter or return))
// callback is function passed an argument to another function
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

// PRC.QUS.
let nums = [12, 15, 20, 33];
let calcSquare = (nums) => {
  console.log(nums * nums);
};
nums.forEach(calcSquare);

// Array Methods
// MAP is very similar to  forEach
// MAP create a new array

let numbers = [1, 2, 7, 10];
let newnumber = numbers.map((val) => {
  return val * 3;
});
console.log(newnumber);

// FILTER
let even = [100, 233, 247, 256, 672, 779, 450, 278];
let newEven = even.filter((val) => {
  return val % 2 === 0;
});
console.log(newEven);

// REDUCE   perform some operation & return single value
let value = [11, 15, 16, 30];
let output = value.reduce((pre, cur) => {
  return pre + cur;
});
console.log(output);

let larger = [5, 6, 100, 7, 9];
const newlarger = larger.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(newlarger);

// PRC. QUS.
let marks = [92, 67, 97, 94, 89, 95, 78];
let toppers = marks.filter((val) => {
  return val > 90;
})
console.log(toppers);

let n = prompt("Enter a number:");
let array = [];

for(let i = 1; i <= n; i++) {
  array[i-1] = i;
}
console.log(array);

let add = array.reduce((res, curr) => {
  return res + curr;
});
console.log("add =", add);
 
let produt = array.reduce((res, curr) => {
  return res * curr;
});
console.log("produt =", produt);


