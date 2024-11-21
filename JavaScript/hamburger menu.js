document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu__icon');
    const menuDropdown = document.getElementById('menuDropdown');

    // Toggle-Menü beim Klicken auf das Hamburger-Icon
    menuIcon.addEventListener('click', function() {
        menuDropdown.classList.toggle('active');

        // Wechsel zwischen Hamburger-Icon und X
        if (menuDropdown.classList.contains('active')) {
            menuIcon.textContent = '✖'; // X-Symbol
        } else {
            menuIcon.textContent = '☰'; // Hamburger-Icon
        }
    });

    // Menü schließen beim Klicken außerhalb
    document.addEventListener('click', function(event) {
        if (!menuDropdown.contains(event.target) && !menuIcon.contains(event.target)) {
            menuDropdown.classList.remove('active');
            menuIcon.textContent = '☰'; // Icon zurücksetzen
        }
    });
});
