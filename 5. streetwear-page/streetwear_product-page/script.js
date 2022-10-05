$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var coatesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + coatesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
