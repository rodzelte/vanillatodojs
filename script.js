const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
const ul = document.querySelector("#list");

let list = JSON.parse(localStorage.getItem("list")) || [];
addTask();

submit.addEventListener("click", function () {
  const trim = input.value.trim();
  if (trim === "") {
    errorMessage();
    return;
  } else {
    list.push(trim);
    input.value = "";
    console.log(list);
    addTask();
    localStorage.setItem("list", JSON.stringify(list));

    return;
  }
});

function errorMessage() {
  const trim = input.value.trim();
  if (!trim) {
    const errorPing = document.createElement("span");
    errorPing.setAttribute("id", "errorMessage");
    errorPing.textContent = "Please enter a valid input";
    errorPing.style.color = "red";
    errorPing.style.fontSize = "12px";
    document.querySelector("#input-form").appendChild(errorPing);
  }

  setTimeout(() => {
    document.querySelector("#errorMessage").remove();
  }, 2000);
}

function addTask() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  list.forEach((li) => {
    const liElement = document.createElement("li");
    const dButton = document.createElement("button");
    dButton.textContent = "Delete";
    dButton.classList.add("clear-btn");

    dButton.addEventListener("click", function () {
      liElement.remove();
      const index = list.indexOf(li);
      if (index !== 1) {
        list.splice(index, 1);
      }
    });
    liElement.classList.add("todo-item");
    liElement.textContent = li;
    ul.appendChild(liElement);
    liElement.appendChild(dButton);
  });
}
