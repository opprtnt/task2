import 'webpack-jquery-ui/slider';

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