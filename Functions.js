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
ourFunction("I love JS");    // argument

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
}

// PRC. QUS.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" ||
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
        if (char === "a" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }
    return count;

}

// for each loop in JS -> (Higher Order Function (used other func. as parameter or return))
// callback is function passed an argument to another function
let arr = [1,2,3,4,5,6];
arr.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
});

// PRC.QUS.
let nums = [12,15,20,33];
let calcSquare = (nums) => {
    console.log(nums*nums);
}
nums.forEach(calcSquare);

