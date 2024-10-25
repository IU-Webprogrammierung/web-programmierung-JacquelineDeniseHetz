// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
  
    // Bewegt den Cursor auf der Seite
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  
    // Klassen für dynamische Effekte
    document.querySelectorAll('[data-view-class]').forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('view', element.dataset.viewClass);
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('view', element.dataset.viewClass);
      });
    });
  
    // Effekt für Links und Mails
    document.querySelectorAll('a, .mail-trigger').forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('link');
      });
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('link');
      });
    });
  
    // jQuery-basierte Hover-Effekte für Scroll-Elemente
    $('.horizontal .items .flex').hover(
      function () {
        $(this).addClass('show');
        cursor.classList.add('view', `view${$(this).index() + 1}`);
      },
      function () {
        $(this).removeClass('show');
        cursor.classList.remove('view', `view${$(this).index() + 1}`);
      }
    );
  
    // Hover-Effekt für Navigationslinks
    $('.horizontal .visit, nav-links a').hover(
      function () { cursor.classList.add('link'); },
      function () { cursor.classList.remove('link'); }
    );
  });