console.log("Hello!");
alert("Hello");
// let heading = document.getElementById("myid");
// console.dir(heading);

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let parag = document.getElementsByTagName("p");
// console.dir(parag);

// let name = document.querySelectorAll(".myclass");
// console.dir(name);

let heading = document.querySelector("h1");
heading.remove();

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Beginners";

// let div = document.querySelector("div");

// div.style.backgroundColor = "purple ";
// div.style.backgroundColor = "blue";

// div.style.fontSize = "26px";

// let el = document.createElement("div")

let div = document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "Hi, I am new coder";

let newButton = document.createElement("button");
newButton.innerText = "Click me! ";

newButton.style.color = "white";
newButton.style.backgroundColor = "purple";
document.querySelector("body").prepend(newButton);
