const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

let todo = JSON.parse(localStorage.getItem("todo")) || []; 

document.addEventListener("DOMContentLoaded", renderList); 

submit.addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    todo.push(value);
    localStorage.setItem("todo", JSON.stringify(todo)); 
    input.value = "";
    renderList();
  } else {
    showErrorMessage();
  }
});

function renderList() {
  list.innerHTML = ""; 

  todo.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.display = "flex";  
    li.style.alignItems = "center"; 

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "red";

    deleteButton.addEventListener("click", () => {
      todo.splice(index, 1); 
      localStorage.setItem("todo", JSON.stringify(todo)); 
      renderList(); 
    });

    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}

function showErrorMessage() {
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
