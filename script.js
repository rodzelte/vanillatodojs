const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

const todo = [];

submit.addEventListener("click", () => {
  const value = input.value;
  if (value) {
    todo.push(value);
    console.log(todo);
    input.value = "";
    list.innerHTML = "";
    todo.forEach((item) => {
      const li = document.createElement("li");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      li.textContent = item;
      list.appendChild(li);
      list.appendChild(deleteButton);
    });
  } else {
    if (!value) {
      const error = document.createElement("span");
      error.textContent = "Please enter a value";
      error.style.color = "red";
      error.classList.add("error-message");
      submit.appendChild(error);

      submit.disabled = true;

      setTimeout(() => {
        error.remove();
        submit.disabled = false;
      }, 1000);
    }
    console.log("Please enter a value");
  }
});
