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
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var anchor = $(this).text().toLowerCase();
    $('html,body').animate({
      scrollTop: $('#'+anchor).offset().top
    });
    $('#site-nav').removeClass('menu-open');
    window.location.hash = anchor;
  });
if (window.location.hash !== '') {
  $(window).load(function() {
    console.log(window.location.hash);
    $(window).scrollTop($(window.location.hash).offset().top);
  });
}



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
