const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")
const themeToggle = document.getElementById("theme-toggle")

loadTasks()

taskForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    const inputElementTask = document.getElementById("task-input")
    const valueElementTask = inputElementTask.value
    console.log(valueElementTask)

    if(valueElementTask) {
        taskList.append(createTaskElement(valueElementTask))
        storeTaskLocalStorage(valueElementTask)
        inputElementTask.value = ''
      }

})

function createTaskElement(taskText){
    const li = document.createElement('li')
    li.textContent = taskText

    li.append(createButton('❌','delete-btn'))
    li.append(createButton('✏️','edit-btn'))
    return li
}

function createButton(text, className){
    const btn = document.createElement('span')
    btn.textContent=text
    btn.className=className
    return btn
}

taskList.addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete-btn")){
        deleteTask(event.target.parentElement)
    }
    if(event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement)
    }
})

function deleteTask(taskItem) {
    if(confirm("Estas seguro de Borrar este elemento?")){
        taskItem.remove()
    }
    updateTaskLocalStorage() 
}
function editTask(taskItem) {
    const newTask = prompt("Edita la tarea: ",taskItem.firstChild.textContent)

    if(newTask!==null){
        taskItem.firstChild.textContent = newTask
        updateTaskLocalStorage()
    }
    
}

function storeTaskLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")
    tasks.forEach((task)=>{
        taskList.appendChild(createTaskElement(task))
    })
}

function updateTaskLocalStorage() {
    const tasks = Array
    .from(taskList.querySelectorAll("li"))
    .map((li)=> li.firstChild.textContent)
    console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks))    
}