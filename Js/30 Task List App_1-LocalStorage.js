//Task List App
let taskFormEl = document.querySelector('#task-form');
taskFormEl.addEventListener('submit', function(event){
    let inputEl = document.querySelector('#input-item');
    let task = inputEl.value.trim();

    //To store the tasks in to the array and to get the task
    let taskLists = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskLists.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(taskLists));
    displayTasks();
    location.reload();
});

//Display task

let displayTasks = () => {
    let taskListsEl = document.querySelector('#task-list');
    let taskLists = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskLists.length !== 0){
        let eachTask = '';
        for(let task of taskLists){
            eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
                            <span class="notes">${task}</span>
                            <button class="btn close marginForBtn">
                                <i class="fa fa-times-circle"></i>
                            </button>
                        </li>`;
        }
        taskListsEl.innerHTML = eachTask;
    }
};
displayTasks();


//remove task
let taskListsEl = document.querySelector('#task-list');
taskListsEl.addEventListener('click', function(event){
    let targetEl = event.target;
    if(targetEl.classList.contains('fa-times-circle')){
        let parentEl = targetEl.parentElement.parentElement;
        let tasktoDel = parentEl.innerText;
        //To get task from local storage
        let taskLists = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskLists = taskLists.filter(function(task){
            return task.trim() !== tasktoDel.trim();
        });
        localStorage.setItem('tasks', JSON.stringify(taskLists));
        displayTasks();
        location.reload();
    }
});