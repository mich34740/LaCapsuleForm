const buttonTask = document.getElementById('addTaskBtn');
const listeTask = document.getElementById('taskList');

buttonTask.addEventListener("click", (event) => {
    const taskText = document.getElementById("taskInput");
    const list = document.getElementById('taskList');
    list.innerHTML+='<li>'+taskText.value+'</li>'
    taskText.value='';
});

listeTask.addEventListener("click", (event) => {
    console.log(event.currentTarget+' '+event.target.tagName);
    if (event.target.tagName === 'LI') {
        console.log(event.target.innerHTML);
        event.Target.style.backgroundColor='blue';
    }
});