

export default function slider(e) {
  if (!(e.target.classList.contains('slider__prev-arrow-icon') || e.target.classList.contains('slider__next-arrow-icon'))) return;

  let dots = e.target.closest('.slider').querySelectorAll('.slider__dot');
  let slides = e.target.closest('.slider').querySelectorAll('.slider__slide');
  let slideIndex;

  for (let i = 0; i < slides.length; i++) {
    if (dots[i].classList.contains('slider__dot_active')) slideIndex = i + 1;
  }

  if (e.target.classList.contains('slider__prev-arrow-icon')) prevSlide();
  if (e.target.classList.contains('slider__next-arrow-icon')) nextSlide()
  function showSlide() {

    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex === 0) slideIndex = slides.length;


    for (let slide of slides) {
      slide.style.display = 'none';
    }
    for (let dot of dots) {
      dot.classList.remove('slider__dot_active');
    }

    slides[slideIndex - 1].style.display = 'block';

    dots[slideIndex - 1].classList.add('slider__dot_active');


  }


  function prevSlide() {
    slideIndex -= 1
    showSlide();
  }

  function nextSlide() {
    slideIndex += 1;
    showSlide();
  }
}