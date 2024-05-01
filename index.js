const inputBox = document.querySelector('[data-js="input-box"]');
const listContainer = document.querySelector('[data-js="list-container"]');

function addTask() {
  if (inputBox.value === "") {
    alert("Write please!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = " ";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveDate();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
