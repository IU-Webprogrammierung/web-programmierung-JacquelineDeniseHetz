// JavaScript Document Slideübergang zwischen Seiten bzw. auch Preloader zu Inhalt - Überarbeitung zum späteren Zeitpunkt, da nur Nice to Have

// Funktion für den Slide-Übergang nach dem Preloader
window.addEventListener('load', function () {
    // Warte, bis der Preloader abgeschlossen ist
    setTimeout(function () {
        // Preloader ausblenden
        const loader = document.getElementById('loader');
        const blackOverlay = document.querySelector('.blackoverlay');
        loader.style.opacity = '0';
        blackOverlay.style.opacity = '0';

        // Entferne Preloader nach dem Ausblenden
        setTimeout(function () {
            loader.style.display = 'none';
            blackOverlay.style.display = 'none';

            // Zeige den Hauptinhalt mit einer Slide-Animation
            const pageContent = document.getElementById('home_page');
            pageContent.style.display = 'block'; 

            // Starte die Slide-Animation
            pageContent.style.transform = 'translateY(100vh)'; 
            pageContent.style.transition = 'transform 1s ease-out'; 

            // Nach einem kurzen Timeout wird die Seite "hochgezogen"
            setTimeout(function() {
                pageContent.style.transform = 'translateY(0)'; 
            }, 50); 
        }, 1000); 
    }, 7000); 
});