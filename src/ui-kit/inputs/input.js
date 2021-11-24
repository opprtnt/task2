$('.datepicker-from').on('click', function () {
  $('.calendar').toggle();
  toggleArrow($(this).find('.datepicker-from__icon'));
})


function toggleArrow(icon) {
  ($(icon).text() == 'expand_more') ? $(icon).text('expand_less') : $(icon).text('expand_more');
}
