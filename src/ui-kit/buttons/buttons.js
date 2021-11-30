$('.like-button').on('click', function (e) {
  let currentLike = +($(this).find('.like-button__count-like').text());
  $(this).hasClass('like-button_active') ? currentLike -= 1 : currentLike += 1;
  $(this).find('.like-button__count-like').text(currentLike);
  $(this).toggleClass('like-button_active');
  $(this).find('.like-button__icon').toggleClass('like-button__icon_active');
})