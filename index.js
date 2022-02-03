var input = document.querySelector('input');
var notes = document.querySelector('.notes');
var enter = document.querySelector('.enter');
var btnsComplete = document.querySelectorAll('.complete');
var btnsDelete = document.querySelectorAll('.delete');
btnsDelete.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        var child = event.currentTarget;
        var target = child.parentNode;
        target.remove();
    });
});
btnsComplete.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        var child = event.currentTarget;
        var target = child.parentNode;
        var currentText = target.querySelector('p').textContent;
        target.remove();
        notes.appendChild(createCompletedTask(currentText));
    });
});
enter.addEventListener('click', function () {
    if (input.value.length >= 3) {
        notes.prepend(createTask(input.value.toLowerCase()));
        input.value = '';
    }
});
var createCompletedTask = function (content) {
    var strike = document.createElement('s');
    var task = document.createElement('div');
    task.classList.add('container');
    var taskContent = document.createElement('p');
    taskContent.textContent = content;
    strike.appendChild(task);
    task.appendChild(taskContent);
    return strike;
};
var createTask = function (content) {
    var task = document.createElement('div');
    task.classList.add('container');
    var taskContent = document.createElement('p');
    taskContent.textContent = content;
    var btnComplete = document.createElement('button');
    btnComplete.classList.add('complete');
    btnComplete.addEventListener('click', function (event) {
        var child = event.currentTarget;
        var target = child.parentNode;
        var currentText = target.querySelector('p').textContent;
        target.remove();
        notes.appendChild(createCompletedTask(currentText));
    });
    var btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.addEventListener('click', function (event) {
        var child = event.currentTarget;
        var target = child.parentNode;
        target.remove();
    });
    task.appendChild(taskContent);
    task.appendChild(btnComplete);
    task.appendChild(btnDelete);
    return task;
};
