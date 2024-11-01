// Preloader anzeigen und danach die Seite anzeigen
window.addEventListener('load', function () {
    setTimeout(function () {
        // Preloader wird entfernt
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.blackoverlay').style.display = 'none';

        // Hauptinhalt wird sichtbar
        document.getElementById('home_page').style.display = 'block';

        // Animationen nach Entfernen des Preloaders starten
        document.querySelector('.firstimg').classList.add('start');
        document.querySelector('.secondimg').classList.add('start');
        document.querySelector('header').classList.add('start');
        document.querySelector('.centerimg').classList.add('start');
    }, 7050); // Preloader bleibt für 7 Sekunden sichtbar
});