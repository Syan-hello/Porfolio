var swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    speed:1000,

    
    centeredSlides: true,

    // autoplay: {
    //   delay: 4000,
    
    //   disableOnInteraction: false,
    //},
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // Element für den benutzerdefinierten Cursor erstellen
const customCursor = document.createElement('div');
customCursor.id = 'custom-cursor';
customCursor.style.position = 'absolute';
customCursor.style.zIndex = '9999'; // Setzt den Cursor immer ganz nach oben
customCursor.style.width = '50px';
customCursor.style.height = '50px';
customCursor.style.background = 'url("") no-repeat center center';
customCursor.style.backgroundSize = 'contain';
customCursor.style.pointerEvents = 'none';
customCursor.style.transition = 'transform 0.1s ease-out';
document.body.appendChild(customCursor);

// Swiper-Bereich auswählen
const swiperContainer = document.querySelector('.swiper');

// Cursor-Position aktualisieren
swiperContainer.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

// Cursor beim Swipen ändern
swiperContainer.addEventListener('mousedown', () => {
  customCursor.style.background = 'url("custom-cursor-grabbing.png") no-repeat center center';
});
swiperContainer.addEventListener('mouseup', () => {
  customCursor.style.background = 'url("custom-cursor.png") no-repeat center center';
});