document.addEventListener("DOMContentLoaded", function() {
    const divContent = document.querySelector('.js--screen-size-content')

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const divContentText = data.ip;
            divContent.innerHTML = divContentText;
        })
        .catch(error => {
            console.log('Error:', error);
        });
});