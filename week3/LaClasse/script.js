function ajoutSuppBordure(name_element) {
    const elements = document.getElementsByTagName(name_element);
    for (let el of elements) {
        if (el.classList.contains("hidden")) {
            alert("Impossible d'ajouter une bordure à un élément caché");
        } else {
        el.classList.toggle("bordered");
        }
    }
}

function cacherClasse(name_element) {
    const elements = document.getElementsByTagName(name_element);
    for (let el of elements) {
        el.classList.toggle("hidden");
    }
}

function ajoutSuppClasse (name_element) {
    const elements = document.getElementsByTagName(name_element);
    for (let el of elements) {
         
        el.classList.toggle("highlight");

    }
}