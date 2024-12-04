/* JS-Dokument Imagegrid*/
document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.panelCon');

    columns.forEach((column) => {
        const content = column.innerHTML;

        // Klonen des Inhalts, um die Spalte vollständig zu füllen und es unendlich scrollbar zu machen
        while (column.scrollHeight < window.innerHeight * 2) {
            column.innerHTML += content;
        }

        // Dynamische Höhe automatisch berechnen
        const columnHeight = column.scrollHeight;

        // CSS-Variable gesetzt
        column.style.setProperty('--scroll-height', `${columnHeight}px`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.panelCon');

    // Funktion zum Aktivieren/Deaktivieren der Animation basierend auf der Bildschirmbreite (Responisivität)
    function handleResponsiveAnimations() {
        const isMobile = window.innerWidth <= 768;

        columns.forEach((column) => {
            const content = column.innerHTML;

            if (isMobile) {
                // Animation deaktivieren für mobile Geräte
                column.style.animation = 'none';
                column.innerHTML = content; // Originalinhalt ohne Klonen/Wiederholungen
            } else {
                // Animation aktivieren für größere Bildschirme
                while (column.scrollHeight < window.innerHeight * 2) {
                    column.innerHTML += content; // Inhalte klonen mit WDH
                }

                const columnHeight = column.scrollHeight;
                column.style.setProperty('--scroll-height', `${columnHeight}px`);
                column.style.animationPlayState = 'running';
            }
        });
    }

    // Initial ausführen
    handleResponsiveAnimations();

    // Animationen bei Bildschirmänderung anpassen lassen
    window.addEventListener('resize', handleResponsiveAnimations);
});