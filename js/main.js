let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    slidesPerView: 1,
    speed: 500,
    centeredSlides: true,
    autoplay: true,
  
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }

  });