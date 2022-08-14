const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDoList";

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const setTrashIconinButton = (button) => {
  const trashIcon = document.createElement("i");
  trashIcon.classList.add('fa-solid');
  trashIcon.classList.add('fa-trash-can');
  trashIcon.classList.add('fa-sm');
  
  button.appendChild(trashIcon);
  button.classList.add("remove-button");
};

const renderTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  setTrashIconinButton(button);
  // Add event listener to icon element instead of button element
  button.querySelector("i").addEventListener("click", (e) => handleToDoDelete(e, newTodo.id));

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodoText = toDoInput.value;
  const newTodo = {
    id: Date.now(),
    text: newTodoText,
  };
  toDos.push(newTodo);
  saveToDos();

  toDoInput.value = "";
  renderTodo(newTodo);
};

const handleToDoDelete = (e, toDoId) => {
  const button = e.target.parentElement;
  const parentLi = button.parentElement;
  parentLi.remove();

  toDos = toDos.filter((toDo) => toDo.id !== toDoId);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const toDoListLocalStorage = localStorage.getItem(TODOS_KEY);
if (toDoListLocalStorage) {
  const parsedToDos = JSON.parse(toDoListLocalStorage);
  toDos = parsedToDos;
  parsedToDos.map((toDoObj) => renderTodo(toDoObj));
}
