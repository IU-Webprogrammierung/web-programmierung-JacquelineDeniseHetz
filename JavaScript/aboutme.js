$(document).ready(function () {
    
    // ScrollMagic Controller
    var usableController = new ScrollMagic.Controller();
    var winH = $(window).outerHeight();

    // Sticky Punkte-Animationen
    var scrollPositions = {
        firstnum: $('.points').offset().top,
        secondnum: $('.point_two').offset().top - 100
    };

    $window.scroll(function () {
        var scrollTop = $window.scrollTop();

        // P 1
        $(".point_one").toggleClass('pinit', scrollTop >= scrollPositions.firstnum);

        // P 2
        $(".point_two").toggleClass('pinit', scrollTop >= scrollPositions.secondnum);
    });

    new Parallax(document.getElementById('scene'));

    var currentPath = window.location.pathname.split("/").pop();
    $('.links a').each(function () {
        if ($(this).attr('href').split("/").pop() === currentPath) {
            $(this).addClass('active');
        }
    });
});

  $('.horizontal .items .flex').hover(
    function () {
      $(this).addClass('show');
      $('.cursor').addClass('view view' + ($(this).index() + 1));
    },
    function () {
      $(this).removeClass('show');
      $('.cursor').removeClass('view viewone viewtwo viewthree viewfour viewfive');
    }
  );

  $('.horizontal .visit, .links a').hover(
    function () { $('.cursor').addClass('link'); },
    function () { $('.cursor').removeClass('link'); }
  );

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
