// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();
    if (taskText === "") return; // Don't add empty tasks

    let taskList = document.getElementById('task-list');

    // Create a new list item
    let newTask = document.createElement('li');

    let taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;

    // Edit button
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-button');
    editBtn.onclick = function() {
        let newText = prompt('Edit your task', taskSpan.innerText);
        if (newText) {
            taskSpan.innerText = newText;
        }
    };

    // Delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-button');
    deleteBtn.onclick = function() {
        taskList.removeChild(newTask);
    };

    // Mark task as completed
    taskSpan.onclick = function() {
        taskSpan.classList.toggle('completed');
    };

    // Append span and buttons to the list item
    newTask.appendChild(taskSpan);
    newTask.appendChild(editBtn);
    newTask.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(newTask);

    // Clear the input
    taskInput.value = '';
}