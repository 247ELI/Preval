let storedValues = [];

const input = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const randomBtn = document.getElementById("randomBtn");
const output = document.getElementById("output");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value !== "") {
    storedValues.push(value);
    input.value = "";
  }
});

randomBtn.addEventListener("click", () => {
  if (storedValues.length === 0) {
    output.textContent = "No values added yet!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * storedValues.length);
  output.textContent = storedValues[randomIndex];
});
