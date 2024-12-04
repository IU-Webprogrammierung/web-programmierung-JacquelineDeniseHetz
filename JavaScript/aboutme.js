/* JS-Dokument Über mich*/
$(document).ready(function () {
    
  // ScrollMagic Controller
  var usableController = new ScrollMagic.Controller();
  var winH = $(window).outerHeight();

});
/* Animation Bilder - Wie bekomme ich es als infitiv scroll hin? - noch offen*/
window.addEventListener('load', () => {
    const track = document.querySelector('.slider-track');
    const clone = track.innerHTML;
    track.innerHTML += clone; 

    let offset = 0;
    const speed = 2; // Geschwindigkeit 

    function animateSlider() {
        offset -= speed;
        if (Math.abs(offset) >= track.scrollWidth / 2) {
            offset = 0; 
        }
        track.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animateSlider);
    }

    animateSlider();
});
