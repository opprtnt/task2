import "inputmask";
import UIkit from 'uikit';
import $ from "jquery";
var selector = document.querySelector(".masked-text-field");
var im = new Inputmask("99-99-9999");
im.mask(selector);
UIkit.notification('Hello world.');

$(".dropdown-rooms-count-expanded__button").on('click', function () {
  let countRooms = $(".dropdown-rooms-count-expanded__option__count").text();
  $(".dropdown-rooms-count-expanded__option__count").text(+countRooms++);
}
);
$(".expendable-checkbox-list__button").on('click', function () {
  $('.expendable-checkbox-list_form').toggle();
})