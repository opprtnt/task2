import "inputmask";
var selector = document.querySelector(".masked-text-field");
alert(selector.classList);
var im = new Inputmask("99-99-9999");
im.mask(selector);