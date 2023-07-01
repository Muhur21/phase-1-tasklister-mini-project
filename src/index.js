document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners();
});

//get the form and add an event listener
function addingEventListeners() {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(e){
  e.preventDefault()
//console.log(e)
  const task = e.target[0].value
  //const task = e.target["new-task-description"].value
  //console.log(task)
  displayTask(task)
}

function displayTask(task){
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
  taskLi.textContent = task
  //console.log(taskLi)
  taskUl.appendChild(taskLi)
}