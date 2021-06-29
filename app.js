// Declaring Variable
const userInput = document.querySelector('#inputTodo');
const addButton = document.querySelector('#addTodo');
const container = document.querySelector('#todoContainer');


const addToDo = () => {
    if (userInput.value) {
        let createdTodo = createToDoHtml(userInput.value, container);
        container.prepend(createdTodo);
        userInput.value = '';
    } else {
        alert('Please enter your do to..!!!');
    }
};

const editTodo = (input) => {
    let editBtn = create(
        'button',
        'btn btn-outline-secondary bg-success text-white px-5 py-3'
    );
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.setAttribute('type', 'button');

    editBtn.addEventListener('click', () => {
        if (editBtn.innerHTML === '<i class="fas fa-edit"></i>') {
            editBtn.innerHTML = '<i class="fas fa-check"></i>';
            input.removeAttribute('readonly');
        } else {
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            input.setAttribute('readonly', '');
        }
    });

    input.addEventListener('dblclick', () => {
        if (editBtn.innerHTML === '<i class="fas fa-edit"></i>') {
            editBtn.innerHTML = '<i class="fas fa-check"></i>';
            input.removeAttribute('readonly');
        } else {
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            input.setAttribute('readonly', '');
        }
    });
    input.addEventListener('onfocusout', () => {
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        input.setAttribute('readonly', '');
    });

    input.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 && editBtn.innerHTML === '<i class="fas fa-check"></i>') {
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            input.setAttribute('readonly', '');
        }
    });
    return editBtn;
};

const deleteTodo = (container, todoDiv) => {
    let deleteBtn = create(
        'button',
        'btn btn-outline-secondary bg-danger text-white px-5 py-3'
    );
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.setAttribute('type', 'button');

    deleteBtn.addEventListener('click', () => {
        container.removeChild(todoDiv);
    });
    return deleteBtn;
};

const createToDoHtml = (userInput, container) => {
    let todoDiv = create('div', 'pb-3 todo-item');
    let inputGroupDiv = create('div', 'input-group');

    let input = create('input', 'form-control');
    input.setAttribute('readonly', '');
    input.setAttribute('placeholder', 'Edit your to-do');
    input.value = userInput;
    inputGroupDiv.appendChild(input);

    let editBtn = editTodo(input);
    inputGroupDiv.appendChild(editBtn);

    let deleteBtn = deleteTodo(container, todoDiv);
    inputGroupDiv.appendChild(deleteBtn);

    todoDiv.append(inputGroupDiv);

    return todoDiv;
};

const create = (tag, className) => {
    let createTag = document.createElement(tag);
    createTag.classList = className;

    return createTag;
};


// Adding Events Listener

addButton.addEventListener('click', addToDo);
userInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        addToDo();
    }
});