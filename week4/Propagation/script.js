const buttons = document.querySelectorAll('li');
const nav = document.getElementById("mainNav");
for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
    console.log("event.target :", event.target); // le bouton sur lequel on clique
    console.log("event.currentTarget :", event.currentTarget); // bouton qui gère l'événement

    if (event.currentTarget.textContent==='Item 2'){
        event.stopPropagation();
    } else {   
    alert('Bouton cliqué '+ event.currentTarget.textContent);
    };
},false); // `false` ou rien pour la phase de bubbling
};
nav.addEventListener("click", (event) => {
  alert(`Événement capturé au niveau du nav par ${event.currentTarget.tagName}`);
});