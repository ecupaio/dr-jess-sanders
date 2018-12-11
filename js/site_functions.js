$(function(){
  //sidebar nav
  $('.menu-toggle').click(function() {
    $('#site-nav, #main').toggleClass('menu-open');
  });
  var siteNav = $('#site-nav').offset().top;
  $(window).scroll(function() {
    var top = $(window).scrollTop();
      if ($(window).scrollTop() > siteNav) {
          $('#site-nav').css('top',top);
      }
      else {
        $('#site-nav').css('top','1em');
      }
  });
  //pub slider
  $('.pub-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });
});
