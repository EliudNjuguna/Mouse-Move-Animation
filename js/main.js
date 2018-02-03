
  var windowWidth = $(window).width();

      $('.page-container').mousemove(function (event) {

            var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
            var moveY = (($(window).height() / 2) - event.pageY) * 0.1;

            $('.page-background').css('margin-left', moveX + 'px');
            $('.page-background').css('margin-top', moveY + 'px');

});
