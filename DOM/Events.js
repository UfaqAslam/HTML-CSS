let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log("You are inside the div");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let Btn = document.querySelector("#Btn");

Btn.addEventListener("click", (evt) => {
  console.log("Button was clicked - Handler1");
  console.log(evt);
  console.log(evt.type);
});

Btn.addEventListener("click", (evt) => {
  console.log("Button was clicked - Handler2");
});
let handler3 = () => {
  console.log("Button was clicked - handler3");
};
Btn.addEventListener("click", handler3);
Btn.removeEventListener("click", handler3);

// PRACTICE QUES.
// Create a toggle(Switch) button
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    // document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    // document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
