document.addEventListener('DOMContentLoaded', function () {
    fetch('../html/preloader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('preloader-placeholder').innerHTML = data;
        })
        .then(() => { //ohne hier den Block hat die Animation leider nicht mehr funktioniert, obwohl die zwei js Dateien eingebunden sind in der preloader.html
            $('.loading-slider').slick({
                autoplay: true,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                vertical: true 
            });
        })
        .catch(err => console.error('Fehler beim Laden des Preloaders:', err));
});
