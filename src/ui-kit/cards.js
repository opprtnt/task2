// slider
let slideIndex = 1;

function showSlide() {
  let slides = document.querySelectorAll('.slider__slide');
  let dots = document.querySelectorAll('.slider__dot')

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




let prev = document.querySelector('.slider__prev-arrow');
prev.onclick = prevSlide;

function prevSlide() {
  slideIndex -= 1
  showSlide();
}

let next = document.querySelector('.slider__next-arrow');
next.onclick = nextSlide;

function nextSlide() {
  slideIndex += 1
  showSlide();
}

