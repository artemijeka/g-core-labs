$(function () {
  $(document).on('click', '.js-carousel-item', function() {
    // console.log(this);
    let thisTabData = $(this).data('to-tab');
    console.log(thisTabData);
    $('.js-carousel-item').removeClass('active');
    $(this).addClass('active');

    $('.js-infobox-item').removeClass('active');
    $('.js-infobox-item[data-tab="'+thisTabData+'"]').addClass('active');
  });
});