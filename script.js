document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const prioritySelect = document.getElementById('priority-select');
    const dueDateInput = document.getElementById('due-date');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        const priority = prioritySelect.value;
        const dueDate = dueDateInput.value;

        if (todoText !== '') {
            addTodoItem(todoText, priority, dueDate);
            todoInput.value = '';
            prioritySelect.value = 'normal';
            dueDateInput.value = '';
        }
    });

    function addTodoItem(todoText, priority, dueDate) {
        const li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML = `
            <span>${todoText}</span>
            <div class="task-buttons">
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;

        if (priority === 'high') {
            li.style.borderLeftColor = '#f44336'; // Red color for high priority
        }

        if (dueDate) {
            li.innerHTML += <span class="due-date">Due Date: ${dueDate}</span>;
        }

        todoList.appendChild(li);

        const completeButton = li.querySelector('.complete-button');
        const deleteButton = li.querySelector('.delete-button');

        completeButton.addEventListener('click', function() {
            li.classList.toggle('complete');
            completeButton.textContent = li.classList.contains('complete') ? 'Undo' : 'Complete';
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });
    }
});
