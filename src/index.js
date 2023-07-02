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
  const priorityLevel = parseInt(e.target.priority.value)
  //console.log(priorityLevel)// These are here just to check if the method is right
  displayTask(task, priorityLevel)
}

function displayTask(task, priorityLevel){
  const taskUl = document.getElementById("tasks")
  const taskLi = document.createElement("li")
const deleteBtn = document.createElement("button")

deleteBtn.textContent = "X"
deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + ""
  taskLi.style.color = getpriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}
function deleteTask(e){
  e.target.parentNode.remove()
  //console.log(e)
}

function getpriorityColor(priorityLevel){
  if (priorityLevel === 1) {
    return "red"
  } else if (priorityLevel === 2){
    return "blue"
  } else{
    return "green"
  }
}