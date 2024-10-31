$(document).ready(function () {
    // Overlay beim Start
    $('.second-overlay').addClass('start');
    window.scrollTo(0, 0);

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
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.first_slider');

  let scrollSpeed = 4; 

  function autoScroll() {
    
    slider.scrollLeft += scrollSpeed;

    
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  slider.innerHTML += slider.innerHTML;

  autoScroll();
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