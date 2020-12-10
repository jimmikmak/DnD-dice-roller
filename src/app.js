console.log("App is running");

// Random dice rolls on click

// Look at this d4 die, when clicked, do something
$("#dice-roller-d4").on("click", () => {
  // Do a Math.random, store as a variable
  let result = Math.floor(Math.random() * 4) + 1;
  // Look for a div labeled: "d4-generated-num" and change the HTML
  // to be the resulting integer
  document.getElementById("d4-generated-number").innerHTML = result;
});

$("#dice-roller-d6").on("click", () => {
  let result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("d6-generated-number").innerHTML = result;
});

$("#dice-roller-d8").on("click", () => {
  let result = Math.floor(Math.random() * 8) + 1;
  document.getElementById("d8-generated-number").innerHTML = result;
});

$("#dice-roller-d10").on("click", () => {
  let result = Math.floor(Math.random() * 10) + 1;
  document.getElementById("d10-generated-number").innerHTML = result;
});

$("#dice-roller-d12").on("click", () => {
  let result = Math.floor(Math.random() * 12) + 1;
  document.getElementById("d12-generated-number").innerHTML = result;
});

$("#dice-roller-d20").on("click", () => {
  let result = Math.floor(Math.random() * 20) + 1;
  document.getElementById("d20-generated-number").innerHTML = result;
});
