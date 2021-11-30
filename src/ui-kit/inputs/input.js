$('.datepicker-from').on('click', function () {
  $('.calendar').toggle();
  toggleArrow($(this).find('.datepicker-from__icon'));
})


function toggleArrow(icon) {
  ($(icon).text() == 'expand_more') ? $(icon).text('expand_less') : $(icon).text('expand_more');
}

$('.dropdown-count').on({

  click: function (e) {

    if (e.target.className === 'dropdown-count__clear-button') clearCountList(e.target, this);
    if (e.target.tagName !== 'BUTTON') return;

    let value = +$(e.target).siblings('span').text();
    let sumGuests = 0;

    if ($(e.target).hasClass('set-value-button__up')) $(e.target).siblings('span').text(value + 1);
    if (value === 0) $(e.target).siblings('.set-value-button__down').toggleClass('not-active');
    if ($(e.target).hasClass('set-value-button__down')) {
      if (value < 1) return;
      $(e.target).siblings('span').text(value - 1);
      if (value === 1) $(e.target).toggleClass('not-active');
    }
    if ($(this).hasClass('bedrooms-count')) {
      showBedrooms(this);
    }
    else {
      for (let v of $(this).find('.set-value-button__value')) {
        sumGuests += +$(v).text();
      }
      showSumGusest(sumGuests, $(this).find('.dropdown-count__placeholder-text'));
    }
  }
})

function showBedrooms(dropdown) {

  let placeholderText = '';
  for (let v of $(dropdown).find('.dropdown-count__list-item-title')) {
    let countRooms = $(v).siblings('.set-value-button').find('.set-value-button__value').text();
    if (countRooms !== '0') placeholderText += countRooms + ' ' + $(v).text() + ', ';
  }
  $(dropdown).find('.dropdown-count__placeholder-text').text(placeholderText.slice(0, -2));
}


function showSumGusest(sum, elem) {

  let innerElem = '';
  if (sum === 1) innerElem = "1 гость";
  else if (sum < 5) innerElem = sum + ' гостя';
  else innerElem = sum + ' гостей';
  if (sum === 0) {
    $(elem).text("Сколько гостей");
    return;
  }
  $('.dropdown-count__clear-button').text('Очистить');
  $(elem).text(innerElem);

}

function clearCountList(clearBtn, dropdown) {

  $(dropdown).find('.set-value-button__value').text('0');
  $(dropdown).find('.dropdown-count__placeholder-text').text('Сколько гостей');
  $(clearBtn).text('');
  $(dropdown).find('.set-value-button__down').toggleClass('not-active');
}


$(".dropdown-count__placeholder").on('click', function () {
  $(this).siblings('.dropdown-count__options').toggle();
  let icon = ($(this).find(".dropdown-count__icon"));
  toggleArrow(icon)
})

$(".expendable-checkbox-list__button").on('click', function () {
  $('.expendable-checkbox-list__form').fadeToggle();
  let icon = $(".expendable-checkbox-list__icon");
  toggleArrow(icon)
})