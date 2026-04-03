
var newDiv = document.createElement('div');
var textNode = document.createTextNode('Hello World!');
newDiv.appendChild(textNode);

document.body.appendChild(newDiv);
newDiv.setAttribute('class','greeting')

var referenceNode = document.querySelector('.greeting');
var newP = document.createElement('p');
var textNode2 = document.createTextNode('Bienvenue à la librairie!');
newP.appendChild(textNode2);
document.body.insertBefore(newP, referenceNode);
newDiv.textContent='Liste des livres à venir...';
document.body.removeChild(newP);

