// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const cursor = document.querySelector('.cursor');
  
    // Scroll event to toggle header transparency
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('nottransparent');
      } else {
        header.classList.remove('nottransparent');
      }
    });
  
    // Initialize slick for the loading-slider
    $('.loading-slider').slick({
      dots: false,
      arrows: false,
      vertical: true,
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: false,
      pauseOnHover: false,
    });
  
    // Reveal function for loader
    function reveal() {
      setTimeout(function () {
        $('#loader').remove();
        $('.blackoverlay').remove();
        $('.firstimg, .secondimg, header').addClass('start');
        setTimeout(function () {
          $('.centerimg').addClass('start');
          $('.title').slick('slickSetOption', 'autoplay', true, true);
          setTimeout(function () {
            $('.firstname').addClass('start');
            setTimeout(function () {
              $('.surname').addClass('start');
            }, 100);
          }, 1000);
        }, 1000);
      }, 2000);
    }
  
    // Slick afterChange event
    $('.loading-slider').on("afterChange", function (event, slick, currentSlide) {
      if (currentSlide === 5) {
        $(this).slick('slickPause');
        setTimeout(function () {
          $('.blackoverlay').addClass('appear');
          reveal();
        }, 2000);
      }
    });
  
  
  
    // Lazy load images
    $(window).on('load', function () {
      $('img[data-lazy-src]').each(function () {
        var getOffsetTop = $(this).offset().top;
        if (getOffsetTop < ($(window).scrollTop() + ($(window).height() * 2))) {
          $(this).attr('src', $(this).attr('data-lazy-src'));
        }
      });
    });
  
    // Hover effects for center images
    $('.centerimg img, .centerimg .firstname, .centerimg .surname').hover(
      function () { $('body').addClass('fill'); },
      function () { $('body').removeClass('fill'); }
    );
  
    // Custom cursor logic
    function myFunc() {
      let xMousePos = 0, yMousePos = 0;
      let lastScrolledLeft = 0, lastScrolledTop = 0;
  
      $(document).mousemove(function (event) {
        xMousePos = event.pageX;
        yMousePos = event.pageY;
        cursor.style.left = xMousePos + 'px';
        cursor.style.top = yMousePos + 'px';
      });
  
      $(window).scroll(function () {
        const scrollTop = $(document).scrollTop();
        const scrollLeft = $(document).scrollLeft();
        if (lastScrolledLeft !== scrollLeft || lastScrolledTop !== scrollTop) {
          lastScrolledLeft = scrollLeft;
          lastScrolledTop = scrollTop;
        }
      });
    }
    myFunc();
  
  // Horizontal scroll setup
  function checkPosition() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      var itemWidth = 900; 
      var totalItems = 3; 
      var controller = new ScrollMagic.Controller();
  
      // Timeline für horizontales Scrollen
      var horizontalSlide = new TimelineMax()
        .to("#horizontal", 1, { x: -itemWidth })   
        .to("#horizontal", 1, { x: -itemWidth * 2 })
        .to("#horizontal", 1, { x: -itemWidth * 2.1 });  
  
      // ScrollMagic-Szene für horizontales Scrollen
      new ScrollMagic.Scene({
        triggerElement: "#scroll-horizontal",
        triggerHook: "onLeave",
        duration: itemWidth * (totalItems - 1), 
      })
        .setPin("#scroll-horizontal")
        .setTween(horizontalSlide)
        .addTo(controller)
        .on('end', function () {
          
          document.body.style.overflowX = 'hidden';
        });
  
      // Fortschrittsbalken-Animation
      let progressTween = new TimelineMax().to('.loadbar', 1, {
        width: '80%', 
      });
  
      // Fortschrittsbalken-Szene
      new ScrollMagic.Scene({
        triggerElement: '#scroll-horizontal',
        triggerHook: 0,
        duration: itemWidth * (totalItems - 1), 
      })
        .setTween(progressTween)
        .addTo(controller);
    }
  }
  
  checkPosition();
  
    // Image to GIF on viewport scroll
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height() + 200;
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return (elemBottom <= docViewBottom && elemTop >= docViewTop);
    }
  
    $(window).scroll(function () {
      $('#scroll-horizontal').each(function () {
        if (isScrolledIntoView(this)) {
          $(this).addClass('slide');
        } else {
          $(this).removeClass('slide');
        }
      });
    });
  
    // Hover effects for cursor
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
  });  