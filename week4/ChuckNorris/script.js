fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(async data => {
        document.querySelector('#icon').src = data.icon_url;
        document.querySelector('#fact').textContent = data.value;
        document.querySelector('#url').textContent = data.url;
        translateViaBrowser(data.value);
        });


