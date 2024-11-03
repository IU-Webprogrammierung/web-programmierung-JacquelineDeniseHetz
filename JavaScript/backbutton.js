document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.getElementsByClassName('back-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            window.history.back();
        });
    }
});