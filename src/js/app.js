require('./bootstrap');
(function ($) {

  // Write something

})(jQuery);

// Switch rtl & lre versions
window.direction = (dir) => {
  let styleElement = $('link[data-rtl]');
  if (dir === 'rtl') {
    styleElement.attr('href', styleElement.data('rtl'));
    $('html').attr('dir', 'rtl');
  }
  if (dir === 'ltr') {
    styleElement.attr('href', styleElement.data('ltr'));
    $('html').attr('dir', 'ltr');
  }

  return false;
};