$(function($) {
  $('.bg-swicher').bgSwitcher({
    images: ['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'],
    interval: 5000,
    loop: true
  });

  $(window).click(function () {
  var targetElement = $('.fadein').offset().left;
  var click = $(window).click;
  var windowWidth = $(window).width();
  if  (click = targetElement){
    $('.fadein').css('opacity', '1');
    $('.fadein').css('transform', 'translateX(0)');
    }
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '20%',
  });

  $('.more-button').on('click', function() {
    if ($('.open-box').is(':hidden')) {
      $('.open-box').slideDown();
      $(this).text('close');
      $(this).css('background-color', '#808080');
    } else{
      $('.open-box').slideUp();
      $(this).test('more');
      $(this).css('background-color', '#fabb51');
    }
  });

  $(".modal-button").modaal();

  $('nav a[href^="#"]').click(function(){
    var abjust = 50;
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#"  || href == "" ? 'html' : href);
    var position = target.offset().top - abjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});
