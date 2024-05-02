document.addEventListener("DOMContentLoaded", function() {
    function getScreenSize() {
        const divContent = document.querySelector('.js--screen-size-content')
        const width = window.innerWidth;
        const height = window.innerHeight;
        const divContentText = `${width}px x ${height}px`;
        divContent.innerHTML = divContentText;
    }
    getScreenSize();
    
    window.addEventListener('resize', getScreenSize);
});