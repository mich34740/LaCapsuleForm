const buttonTask = document.getElementById('addTaskBtn');
const listeTask = document.getElementById('taskList');

buttonTask.addEventListener("click", (event) => {
    const taskText = document.getElementById("taskInput");
    const list = document.getElementById('taskList');
    if (!taskText.value==''){
    list.innerHTML+='<li>'+taskText.value+'</li>'
    taskText.value='';
    } else {
        alert('Le libellé de la tâche est obligatoire!');
    }
});

listeTask.addEventListener("click", (event) => {
    if (event.target.tagName === 'LI') {
        if (event.target.style.backgroundColor!=='blue') {
            event.target.style.backgroundColor='blue';
        } else {
            event.target.remove();
        }
        
    }
});