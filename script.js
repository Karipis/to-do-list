let add = document.getElementById('add');
let container = document.getElementById('container');

add.addEventListener('click', handleAddButton);

// Function to handle adding a new task
function handleAddButton() {
    let input = document.getElementById('taskInput').value;

    if(input == ''){
        return 0; // empty task
    }
    // Create the new task HTML
    let newTaskHTML = `
        <div class="task">
            <div class="checkbox">✓</div>
            <p class="taskDesc">${input}</p>
            <button class="delete">✕</button>
        </div>
    `;

    // Insert the new task into the container
    container.insertAdjacentHTML('beforeend', newTaskHTML);

    // Call the checkBox function to attach the event listener to the new checkbox
    checkBox(container.lastElementChild.querySelector('.checkbox'));

    // Call the deleteTask function to add the new delete button
    deleteTask(container.lastElementChild.querySelector('.delete'));
    // Clear the input field after adding the task
    document.getElementById('taskInput').value = '';
}

// Function to add event listeners to checkboxes
function checkBox(checkbox) {
    checkbox.addEventListener('click', (event) => {
        // Toggle the 'checked' class
        event.currentTarget.classList.toggle('checked');
    });
}

// Function to handle task deletion
function deleteTask(deleteButton) {
    deleteButton.addEventListener('click', (event) => {
        // Get the whole task from the delete button
        const task = event.currentTarget.parentElement;
        
        // Remove the task element from the DOM
        task.remove();
    });
}