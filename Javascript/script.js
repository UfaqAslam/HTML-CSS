console.log("Hello!");
alert("Hello");
// let heading = document.getElementById("myid");
// console.dir(heading);

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let parag = document.getElementsByTagName("p");
// console.dir(parag);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let name = document.querySelectorAll(".myclass");
// console.dir(name);

let heading = document.querySelector("h1");
console.dir(heading);

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Beginners";

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs) {
    div.innerText = `New unique value ${idx}`;
 idx++;
}
