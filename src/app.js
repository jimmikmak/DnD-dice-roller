console.log("App is running");

const randomRollOnClick = (event) => {
  event.preventDefault();
  console.log("form Roll");

  // Random dice rolls on click
  $("#dice-roller-d4").on("click", () => {
    console.log(Math.round(Math.random() * 4) + 1);
  });
  $("#dice-roller-d6").on("click", () => {
    console.log(Math.round(Math.random() * 6) + 1);
  });
  $("#dice-roller-d8").on("click", () => {
    console.log(Math.round(Math.random() * 8) + 1);
  });
  $("#dice-roller-d10").on("click", () => {
    console.log(Math.round(Math.random() * 10) + 1);
  });
  $("#dice-roller-d12").on("click", () => {
    console.log(Math.round(Math.random() * 12) + 1);
  });
  $("#dice-roller-d20").on("click", () => {
    console.log(Math.round(Math.random() * 20) + 1);
  });
};

$("#dice-roller-d4").on("Roll", randomRollOnClick);
$("#dice-roller-d4").click();
$("#dice-roller-d6").click();
$("#dice-roller-d8").click();
$("#dice-roller-d10").click();
$("#dice-roller-d12").click();
$("#dice-roller-d20").click();
