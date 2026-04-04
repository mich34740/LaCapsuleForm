const click = document.getElementById("checkAvailability");
click.addEventListener("click", (event) => {
    let element = document.getElementById('book');

    if (element.dataset.available==="false"){
        element.dataset.available="true"
        alert('Le livre est disponible.');
    } else {
        element.dataset.available="false"
        alert("Le livre n'est pas disponible actuellement.");
    }

    
})