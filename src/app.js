console.log("App is running");

// Random dice rolls on click

// Look at this d4 die, when clicked, do something
$("#dice-roller-d4").on("click", () => {
  // Do a Math.random, store as a variable
  const result = Math.floor(Math.random() * 4) + 1;
  // If more than one die is to rolled,
  // roll, plus calculate total of random results
const numOfDice = diceArray [];
for (let i = 0; < diceArray.length; i++) {
  return (result[i]);
}

  // Look for a div labeled: "d4-generated-num" and change the HTML
  // to be the resulting integer
  document.getElementById("d4-generated-number").innerHTML = result;
});
$("#dice-roller-d6").on("click", () => {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("d6-generated-number").innerHTML = result;
});
$("#dice-roller-d8").on("click", () => {
  const result = Math.floor(Math.random() * 8) + 1;
  document.getElementById("d8-generated-number").innerHTML = result;
});
$("#dice-roller-d10").on("click", () => {
  const result = Math.floor(Math.random() * 10) + 1;
  document.getElementById("d10-generated-number").innerHTML = result;
});
$("#dice-roller-d12").on("click", () => {
  const result = Math.floor(Math.random() * 12) + 1;
  document.getElementById("d12-generated-number").innerHTML = result;
});
$("#dice-roller-d20").on("click", () => {
  const result = Math.floor(Math.random() * 20) + 1;
  document.getElementById("d20-generated-number").innerHTML = result;
});

// Plus counter inputs
$("#plus_1").on("click", () => {
  const currentValue = $("#count_1").val();
  $("#count_1").val(parseInt(currentValue) + 1);
});
$("#plus_2").on("click", () => {
  const currentValue = $("#count_2").val();
  $("#count_2").val(parseInt(currentValue) + 1);
});
$("#plus_3").on("click", () => {
  const currentValue = $("#count_3").val();
  $("#count_3").val(parseInt(currentValue) + 1);
});
$("#plus_4").on("click", () => {
  const currentValue = $("#count_4").val();
  $("#count_4").val(parseInt(currentValue) + 1);
});
$("#plus_5").on("click", () => {
  const currentValue = $("#count_5").val();
  $("#count_5").val(parseInt(currentValue) + 1);
});
$("#plus_6").on("click", () => {
  const currentValue = $("#count_6").val();
  $("#count_6").val(parseInt(currentValue) + 1);
});

// Minus counter inputs
$("#minus_1").on("click", () => {
  const currentValue = $("#count_1").val();
  // Cease the decrement count at 1 die
  $("#count_1").val(parseInt(currentValue) - 1);
  // Rather than the Ternary Operator,
  // can I alternatively use an if_else statement here?
  $("#count_1").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_2").on("click", () => {
  const currentValue = $("#count_2").val();
  $("#count_2").val(parseInt(currentValue) - 1);
  $("#count_2").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_3").on("click", () => {
  const currentValue = $("#count_3").val();
  $("#count_3").val(parseInt(currentValue) - 1);
  $("#count_3").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_4").on("click", () => {
  const currentValue = $("#count_4").val();
  $("#count_4").val(parseInt(currentValue) - 1);
  $("#count_4").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_5").on("click", () => {
  const currentValue = $("#count_5").val();
  $("#count_5").val(parseInt(currentValue) - 1);
  $("#count_5").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
$("#minus_6").on("click", () => {
  const currentValue = $("#count_6").val();
  $("#count_6").val(parseInt(currentValue) - 1);
  $("#count_6").val(currentValue - 1 < 1 ? 1 : currentValue - 1);
});
