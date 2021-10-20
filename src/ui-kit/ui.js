import "inputmask";
import UIkit from 'uikit';
import $ from "jquery";
var selector = document.querySelector(".masked-text-field");
var im = new Inputmask("99-99-9999");
im.mask(selector);
UIkit.notification('Hello world.');

// $(".dropdown-rooms-count-expanded__button").on('click', function () {
//   let countRooms = $(".dropdown-rooms-count-expanded__option__count").text();
//   $(".dropdown-rooms-count-expanded__option__count").text(+countRooms++);
// }
// );
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

