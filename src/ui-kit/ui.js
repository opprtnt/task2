import "inputmask";
import 'webpack-jquery-ui/datepicker';



var selector = document.querySelector(".masked-text-field");
var im = new Inputmask("99-99-9999");
im.mask(selector);








// $('.rate-button').on({
//   click: function (e) {
//     let currentStar = $(e.target);
//     if (currentStar.attr('data-checked') === 'false') {
//       currentStar.text('star').attr('data-checked', true);
//       currentStar.prevAll().text('star').attr('data-checked', true);
//     }
//     else {
//       currentStar.nextAll().text('star_border').attr('data-checked', false)
//     }

//   },
//   mouseover: function (e) {
//     let currentStar = $(e.target);
//     if (currentStar.attr('data-checked') === 'false') {
//       currentStar.text('star');
//       currentStar.prevAll().text('star');
//     }

//   },
//   mouseout: function (e) {
//     for (let v of $(this).children()) {
//       if ($(v).attr('data-checked') === 'false') $(v).text('star_border');
//       else $(v).text('star');

//     }

//   }
// })





$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd-mm-yy"
    , duration: "fast"
  });
});

