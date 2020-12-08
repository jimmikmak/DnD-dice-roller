console.log("App is running");

$("#dice-roller").on("click", () => {
  return Math.floor(Math.random() * 4);
});
