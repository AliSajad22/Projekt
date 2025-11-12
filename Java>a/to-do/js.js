// function addTodo() {
//   todoList.innerHTML += "<li> neu to do </li>";
// }

function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText === "") return;

  const todoList = document.getElementById("todo-list");

  const li = document.createElement("li");
  li.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Done";

  deleteButton.classList.add("button");
  deleteButton.classList.add("delete");

  deleteButton.onclick = function () {
    todoList.removeChild(li);
  };

  li.appendChild(deleteButton);

  todoList.appendChild(li);

  input.value = "";
}
