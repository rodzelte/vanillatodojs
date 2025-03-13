const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

submit.addEventListener("click", () => {
  const value = input.value;
  if (value) {
    console.log(value);
    input.value = "";
  } else {
    const error = document.createElement("span");
    error.textContent = "Please enter a value";
    error.style.color = "red";
    setInterval(submit.appendChild(error), 5000);
    console.log("Please enter a value");
  }
});
