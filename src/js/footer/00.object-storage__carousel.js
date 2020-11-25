$(function () {

  function slickify() {
    $('.object-storage__carousel').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            speed: 500,
          }
        }
      ]
    });
  }

  function unSlickify() {
    $('.object-storage__carousel').slick('unslick');
    
    $('.object-storage__carousel').slick({
      settings: 'unslick',
    });
    
    $('.object-storage__carousel').slick({
      responsive: [
        {
          breakpoint: 500,
          settings: 'unslick'
        }
      ]
    });
  }


  if ($(window).width() <= 1000) {
    slickify();
  }

  if ($(window).width() > 1000) {
    unSlickify();
  }

  $(window).resize(function () {
    if ($(window).width() <= 1000) {
      slickify();
    }
    if ($(window).width() > 1000) {
      unSlickify();
    }
  });


});