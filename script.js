let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');
let clearTasks = document.getElementById('clearTasks');
let tasks = document.getElementById('task-list');
let noTasksMessage = document.getElementById("noTasksMessage")

const addTask = () => {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let dateText = document.createElement('span')
    let now = new Date();
    let date = now.toLocaleString();

    if(taskInput.value ===''){return alert('Please input a Task!')}
    li.textContent = taskInput.value;
    btn.textContent = "X"
    dateText.textContent = `(${date})`
    tasks.style.display = 'block'
    noTasksMessage.style.display = 'none';
    tasks.appendChild(li);
    
    li.appendChild(dateText);
    li.appendChild(btn);
    taskInput.value = '';
    btn.addEventListener('click', ()=>{
        tasks.removeChild(li);
        if(tasks.innerHTML === ''){
            noTasksMessage.style.display = 'block'
            tasks.style.display = 'none'
        }
    })
    
}
clearTasks.addEventListener('click', ()=>{
        tasks.innerText = ''
        noTasksMessage.style.display = 'block'
        tasks.style.display = 'none'
    })
addTaskBtn.addEventListener('click', addTask)
taskInput.addEventListener('keypress', (e)=>{
    if(e.key === "Enter"){addTask()}
})