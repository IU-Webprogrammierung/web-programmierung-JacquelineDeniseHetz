// JavaScript Document Cursor/Mouse
const cursor = document.querySelector('.cursor');

// Cursor auf der Seite bewegen
document.addEventListener('mousemove', function(e) {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('.view-trigger').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('view', element.dataset.viewClass);
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('view', element.dataset.viewClass);
  });
});

// Links oder Mail-Interaktionen
document.querySelectorAll('a, .mail-trigger').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('link');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('link');
  });
});
// Hover effects
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


 // Hover effects
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
