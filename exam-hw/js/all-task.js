"use strict";

let tasks = JSON.parse(localStorage.getItem("tasks"));
tasksRender(tasks);

function tasksRender(tasks) {
    if (tasks) {
        tasks.forEach((task) => { taskBlockRender(task) });
        deleteButtonRender();
    } else {
        let noTasks = document.createElement("h3");
        noTasks.innerText = "Задач нет";
        document.getElementById("allTask").append(noTasks);
    }
}

function taskBlockRender(task) {
    let taskBlock = document.createElement("div");
    taskBlock.classList.add("taskBlock");
    taskBlock.setAttribute("id", task.id);
    taskBlock.innerHTML = `
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <span>Выполнить к:
                    <strong>${task.date}</strong>
                </span>
            `;
    taskBlock.addEventListener("click", function selectToggle() {
        this.classList.toggle("selected");
    });
    document.getElementById("allTask").append(taskBlock);
}

function deleteButtonRender() {
    let button = document.createElement("button");
    button.innerText = "Удалить выбранные";
    button.setAttribute("id", "deleteButton");
    button.classList.add("deleteButton");
    button.addEventListener("click", function deleteSelectedTasks() {
        let elems = document.querySelectorAll(".selected");
        if (elems.length) {
            let idToDelete = [];
            elems.forEach((elem) => {
                idToDelete.push(Number(elem.getAttribute("id")));
                elem.remove();
            });
            removeFromStorage(idToDelete);
        }
    })
    document.getElementById("allTask").append(button);
}
function removeFromStorage(id) {
    let tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
    let tasks = tasksFromStorage.filter((task) => { return !id.includes(task.id) });
    if (!tasks.length) {
        localStorage.clear()
        document.getElementById("deleteButton").remove();
        tasksRender(null);
    } else {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}