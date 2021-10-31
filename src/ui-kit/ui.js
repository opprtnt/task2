import "inputmask";
import UIkit from 'uikit';
import $ from "jquery";
import 'webpack-jquery-ui/slider'

var selector = document.querySelector(".masked-text-field");
var im = new Inputmask("99-99-9999");
im.mask(selector);
UIkit.notification('Hello world.');

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

$('.dropdown-count-guests__options').on({

  click: function (e) {
    if (e.target.tagName !== 'BUTTON') return;
    let currentLike = +$(e.target).siblings('span').text();
    let sumGuests = 0;
    if ($(e.target).hasClass('set-value-button__up')) $(e.target).siblings('span').text(currentLike + 1);
    if (currentLike === 0) $(e.target).siblings('.set-value-button__down').toggleClass('not-active');
    if ($(e.target).hasClass('set-value-button__down')) {
      if (currentLike < 1) return;
      $(e.target).siblings('span').text(currentLike - 1);
      if (currentLike === 1) $(e.target).toggleClass('not-active');
    }

    for (let v of $(this).find('.set-value-button__value')) {
      sumGuests += +$(v).text();
    }
    showSumGusest(sumGuests, '.dropdown-count__placeholder-text');
  }
})

function showSumGusest(sum, elem) {
  console.log(sum);
  let innerElem = '';
  if (sum === 1) innerElem = "1 гость";
  else if (sum === 2 || sum === 3) innerElem = sum + ' гостя';
  else innerElem = sum + ' гостей';
  if (sum === 0) {
    $(elem).text("Сколько гостей");
    return;
  }
  $('.dropdown-count-guests__clear-button').text('Очистить');
  $(elem).text(innerElem);

}

$('.dropdown-count-guests__clear-button').on('click', function () {
  $('.set-value-button__value').text('0');
  $('.dropdown-count__placeholder-text').text('Сколько гостей');
  $(this).text('');
  $('.set-value-button__down').toggleClass('not-active');
}
)

$(".dropdown-count-guests__placeholder ").on('click', function () {
  $('.dropdown-count-guests__options').fadeToggle();
  ($(".dropdown-count-guests__icon").text() == 'expand_more') ? $(".dropdown-count-guests__icon").text('expand_less') : $(".dropdown-count-guests__icon").text('expand_more');
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