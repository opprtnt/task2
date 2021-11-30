import $ from "jquery";
import './style.css';
import './style.scss';
import './ui-kit/cards.scss';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import './find-room-page/find-room-page'
import './ui-kit/calendar/calendar'
import './ui-kit/inputs/input';
import './ui-kit/range-slider/range-slider';
import './ui-kit/buttons/buttons';

window.onload = function () {
  let currentLike = $('.set-value-button__value');
  for (let v of $(currentLike)) {
    if ($(v).text() == "0") $(v).siblings('.set-value-button__down').addClass('not-active');
  }
};






