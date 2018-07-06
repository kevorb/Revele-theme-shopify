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


jQuery(function() {
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });
});

$('.swatch-element').on('click', function(){
  $(this).parent().find('.swatch-element').removeClass('selected');
  $(this).addClass('selected');
});
