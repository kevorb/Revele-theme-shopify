function resizeImage() {
  $('.heightOfParent').height("auto");
  $('.heightOfParent').height($('.heightOfParent').parent().height());
}

$(document).ready(function() {
  if ($(window).width() >= 767)
    resizeImage();
  $( window ).resize(function() {
    if ($(window).width() >= 767)
      resizeImage();
  });
});
