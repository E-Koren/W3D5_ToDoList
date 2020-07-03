const taskInput = document.getElementById("new-task");
const addButton = document.getElementsByTagName("button")[0];
const deleteButton = document.querySelectorAll("img");

async function addTasksToDom() {
  try {
    const tasks = await getTasks();
    tasks.forEach((task) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      img.setAttribute("src", "trash-delete-icon.jpg");
      img.setAttribute("onclick", `deleteTaskButton("${task.id}")`);
      img.setAttribute("width", "20px");
      checkBox.setAttribute("onclick", "toggleTaskDone(event)");
      li.appendChild(checkBox);
      li.innerHTML += task.description;
      li.appendChild(img);
      document.querySelector(".todo-list").appendChild(li);
    });
  } catch (e) {
    console.log("Niet teogevoegd");
  }
}
addTasksToDom();

//Functie om data in te voegen en te posten
const addTask = () => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  img.setAttribute("src", "trash-delete-icon.jpg");
  img.setAttribute("onclick", "deleteTaskButton()");
  img.setAttribute("width", "20px");
  checkBox.setAttribute("onclick", "toggleTaskDone(event)");
  li.appendChild(checkBox);
  li.innerHTML += taskInput.value;
  li.appendChild(img);
  document.querySelector(".todo-list").appendChild(li);
  postTask();
  taskInput.value = "";
};
addButton.addEventListener("click", addTask);

//Functie om task te verwijderen
deleteTaskButton = (id) => {
  deleteTask(id);
  const li = event.target.parentElement;
  li.parentNode.removeChild(li);
};

toggleTaskDone = (event) => {
  const listItem = event.target.parentElement;
  listItem.classList.toggle("done");
};
