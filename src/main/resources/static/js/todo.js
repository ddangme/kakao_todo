document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('todo-input');
    const btnAdd = document.getElementById('btn-add');
    const list = document.getElementById('todo-list');

    getTodos();
    btnAdd.addEventListener('click', function() {
       const text = input.value.trim();

       if (text !== '') {
           addTodo(text);
           save();
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
            save();
        });

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                todoText.classList.add('todo-complete');
            } else {
                todoText.classList.remove('todo-complete');
            }
            save();
        });

        list.appendChild(todoElement);
    }


    function save() {
        const todos = [];
        const todoElements = document.querySelectorAll('.todo');
        todoElements.forEach(function(todo) {
           const text = todo.querySelector('p').innerText;
           const checkBox = todo.querySelector('.todo-checkbox');
           let completed;
           if (checkBox.checked) {
               completed = true;
           } else {
               completed = false;
           }
           console.log(completed);
           todos.push({
               text: text,
               completed: completed
           });
        });

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getTodos() {
        const storedData = localStorage.getItem('todos');
        let todos;

        if (storedData) {
            todos = JSON.parse(storedData);
        } else {
            todos = [];
        }

        todos.forEach(function(todo) {
            addTodo(todo.text);
            console.log(todo.completed);
            if (todo.completed) {
                const todoItem = list.lastElementChild;
                todoItem.classList.add('completed');
                todoItem.querySelector('.todo-checkbox').checked = true;
                todoItem.querySelector('.todo-text').classList.add('todo-complete');
            }
        })
    }
});