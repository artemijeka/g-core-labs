$(function () {

 function slickify() {
  $('.object-storage__carousel').slick({
   responsive: [
    {
     breakpoint: 10000,
     settings: "unslick"
    },
    {
     breakpoint: 1000,
     settings: {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 300,
     }
    }
   ]
  });
 }

 function addSlides() {
  let children = $('.object-storage__carousel').children();
  console.log(children);
 }
 // function deslickify() {
  //  $('.object-storage__carousel').slick({
   //   settings: "unslick"
   //  });
   // }
   
   
   
   addSlides();
   slickify();

 $(window).resize(function () {
  if ( $(window).width() <= 1000 ) {
   addSlides();
   slickify();
  }
  // else {
  //  deslickify();
  // }
 });


});