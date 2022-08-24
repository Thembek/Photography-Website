const splash = document.querySelector('.splash-page');

document.addEventListener('DOMContentLoaded', (e) =>{
    e.preventDefault();
    setTimeout(() =>{
        splash.classList.add('display-none');
    }, 3000);
});