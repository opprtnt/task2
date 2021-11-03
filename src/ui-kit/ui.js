import "inputmask";
import UIkit from 'uikit';
import $ from "jquery";
import 'webpack-jquery-ui/slider';
import 'webpack-jquery-ui/datepicker';


var selector = document.querySelector(".masked-text-field");
var im = new Inputmask("99-99-9999");
im.mask(selector);

// $(".dropdown-rooms-count-expanded__button").on('click', function () {
//   let countRooms = $(".dropdown-rooms-count-expanded__option__count").text();
//   $(".dropdown-rooms-count-expanded__option__count").text(+countRooms++);
// }
// );
window.onload = function () {
  let currentLike = $('.set-value-button__value');
  for (let v of $(currentLike)) {
    if ($(v).text() == "0") $(v).siblings('.set-value-button__down').addClass('not-active');
  }
};

$(".expendable-checkbox-list__button").on('click', function () {
  $('.expendable-checkbox-list__form').fadeToggle();
  ($(".expendable-checkbox-list__icon").text() == 'expand_more') ? $(".expendable-checkbox-list__icon").text('expand_less') : $(".expendable-checkbox-list__icon").text('expand_more');
})

$('.like-button').on('click', function (e) {
  let currentLike = +($(this).find('.like-button__count-like').text());
  $(this).hasClass('like-button_active') ? currentLike -= 1 : currentLike += 1;
  $(this).find('.like-button__count-like').text(currentLike);
  $(this).toggleClass('like-button_active');
  $(this).find('.like-button__icon').toggleClass('like-button__icon_active');
})

$('.rate-button').on({
  click: function (e) {
    let currentStar = $(e.target);
    if (currentStar.attr('data-checked') === 'false') {
      currentStar.text('star').attr('data-checked', true);
      currentStar.prevAll().text('star').attr('data-checked', true);
    }
    else {
      currentStar.nextAll().text('star_border').attr('data-checked', false)
    }

  },
  mouseover: function (e) {
    let currentStar = $(e.target);
    if (currentStar.attr('data-checked') === 'false') {
      currentStar.text('star');
      currentStar.prevAll().text('star');
    }

  },
  mouseout: function (e) {
    for (let v of $(this).children()) {
      if ($(v).attr('data-checked') === 'false') $(v).text('star_border');
      else $(v).text('star');

    }

  }
})

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
  $(this).siblings('.dropdown-count__options').fadeToggle();
  ($(this).find(".dropdown-count__icon").text() === 'expand_more') ?
    $(this).find(".dropdown-count__icon").text('expand_less') : $(this).find(".dropdown-count__icon").text('expand_more');
})

$("#slider-range").slider({
  range: true,
  min: 0,
  max: 15000,
  values: [5000, 10000],
  slide: function (event, ui) {
    $(".range-slider__value").val(ui.values[0] + "₽ - " + ui.values[1] + '₽');
  }
});
$(".range-slider__value").val($("#slider-range").slider("values", 0) + '₽' +
  " - " + $("#slider-range").slider("values", 1) + '₽');
;

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy"
    , duration: "fast"
  });
});

