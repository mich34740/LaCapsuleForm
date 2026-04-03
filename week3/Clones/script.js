const newLi = document.createElement('li');
const textNode = document.createTextNode('Coder les UI');
newLi.appendChild(textNode);
const referenceNode = document.querySelector('ul');

referenceNode.appendChild(newLi);

const click = document.getElementById("cloner");
click.addEventListener("click", (event) => {
 
    const liste = document.getElementById('ul');  
    const items = liste.children; 
    const itemClone = items[items.length-1].cloneNode(true);
    const texteTache = document.getElementById('NewTache');  
     if (texteTache.value.length>0) {
        itemClone.textContent=texteTache.value;
     }
    
    liste.appendChild(itemClone);
})