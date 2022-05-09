"use strict";


let idCounter = 0;

document.forms.addTaskForm.elements.nameTask.addEventListener('input', function nameTaskValidate() {
    if (this.validity.valueMissing) setError(this, 'wrongNameTask');
    else setSuccess(this);
});

document.forms.addTaskForm.elements.taskDeadline.addEventListener('input', function deadLineValidate() {
    let now = new Date();
    let inputDate = new Date(document.getElementById('taskDeadline').value);
    if (now >= inputDate) setError(this, 'wrongDeadline');
    else setSuccess(this);
});

function setSuccess(elem) {
    elem.nextElementSibling.className = 'message';
    elem.setCustomValidity("");
}

function setError(elem, key) {
    let messages = {
        wrongDeadline: 'Дата не может быть в прошлом',
        wrongNameTask: `Значение должно быть в диапазоне от ${elem.minLength} до ${elem.maxLength} символов`,
    };
    elem.nextElementSibling.innerText = messages[key];
    elem.nextElementSibling.className = 'message error active';
    elem.setCustomValidity(key);
}

document.forms.addTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let taskName = document.getElementById('nameTask');
    let taskDesc = document.getElementById('dTask');
    let taskDeadline = document.getElementById('taskDeadline');
    if (taskName.validity.valid && taskDeadline.validity.valid) {
        toTheLocal({
            title: taskName.value,
            description: taskDesc.value,
            date: formatDate(taskDeadline.value),
            id: ++idCounter
        });
        document.getElementById('outMessage').innerText = 'Задача была добавлена успешно';
        document.getElementById('outMessage').className = 'message active';
        this.reset();
    }
});


function toTheLocal(task) {
    let tasksFromStorage = localStorage.getItem("tasks");
    if (!(tasksFromStorage === null)) {
        tasksFromStorage = JSON.parse(tasksFromStorage);
        tasksFromStorage.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
    } else {
        localStorage.setItem("tasks", JSON.stringify(Array.of(task)));
    }
}

function formatDate(date) {
    return date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4) + ' ' + date.slice(11, 16)
}