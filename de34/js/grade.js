$(window).bind('scroll', function () {
  previousTop: 0;
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop ) {
    $('header').addClass('visible');
  } else {
      $('header').removeClass('visible');
  }
  this.previousTop = currentTop;
});