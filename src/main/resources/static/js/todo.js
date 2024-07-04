document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('todo-input');
    const btnAdd = document.getElementById('btn-add');
    const list = document.getElementById('todo-list');

    btnAdd.addEventListener('click', function() {
       const text = input.value.trim();

       if (text !== '') {
           addTodo(text);
           input.value = '';
       }
    });

    function addTodo(text) {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.innerHTML = `
            <input type="checkbox" class="todo-checkbox">
            <p class="todo-text">${text}</p>
            <button class="btn-delete">delete</button>
        `;

        const checkbox = todoElement.querySelector('.todo-checkbox');
        const todoText = todoElement.querySelector('.todo-text');
        const deleteButton = todoElement.querySelector('.btn-delete');

        deleteButton.addEventListener('click', function() {
            todoElement.remove();
        });

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                todoText.classList.add('todo-complete');
            } else {
                todoText.classList.remove('todo-complete');
            }
        });

        list.appendChild(todoElement);
    }
});