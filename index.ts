const input = document.querySelector('input')!;
const notes = document.querySelector('.notes')!;
const enterBtn = document.querySelector('.enter')!;

let btnsComplete = document.querySelectorAll('.complete');
let btnsDelete = document.querySelectorAll('.delete');
        btnsDelete.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const child = event.currentTarget as Element;
                const target = child.parentNode as Element;
                target.remove();
            })
        })
        btnsComplete.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const child = event.currentTarget as Element;
                const target = child.parentNode as Element;
    
                let currentText = target.querySelector('p').textContent;
                target.remove();
                
                notes.appendChild(createCompletedTask(currentText));
            })
        })

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value.length >= 3) {
        notes.prepend(createTask(input.value.toLowerCase()));
        input.value = ''!;
    }
})
enterBtn.addEventListener('click', (event) => {
    if (input.value.length >= 3) {
        notes.prepend(createTask(input.value.toLowerCase()));
        input.value = ''!;
    }
})


const createCompletedTask = (content: string) => {
    let strike : HTMLElement = document.createElement('s');

    let task : HTMLDivElement = document.createElement('div');
    task.classList.add('container');

    let taskContent = document.createElement('p');
    taskContent.textContent = content;
    
    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.addEventListener('click', (event) => {
        const child = event.currentTarget as Element;
        const target = child.parentNode.parentNode as Element;
        target.remove();
    })

    strike.appendChild(task);
    task.appendChild(taskContent);
    task.appendChild(btnDelete);

    return strike;
}

const createTask = (content: string) => {
    let task : HTMLDivElement = document.createElement('div');
    task.classList.add('container');

    let taskContent = document.createElement('p');
    taskContent.textContent = content;

    let btnComplete = document.createElement('button');
    btnComplete.classList.add('complete');
    btnComplete.addEventListener('click', (event) => {
        const child = event.currentTarget as Element;
        const target = child.parentNode as Element;

        let currentText = target.querySelector('p').textContent;
        target.remove();
        notes.appendChild(createCompletedTask(currentText));
    })

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete');
    btnDelete.addEventListener('click', (event) => {
        const child = event.currentTarget as Element;
        const target = child.parentNode as Element;
        target.remove();
    })

    task.appendChild(taskContent);
    task.appendChild(btnComplete);
    task.appendChild(btnDelete);

    return task;
}