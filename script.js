const loader = document.querySelector('#loader');
const page = document.querySelector('#main-content');
const slides = [...document.querySelectorAll('.slide')];
const slideCount = document.querySelector('.slide-count');
const slideLabel = document.querySelector('.slide-label');
const slideLabels = ['us together', 'mercy\'s day', 'another beautiful moment'];

const revealPage = () => {
  loader.classList.add('is-hidden');
  page.classList.add('is-visible');
  document.body.classList.remove('is-loading');
};

document.body.classList.add('is-loading');
window.setTimeout(revealPage, 1700);

let activeSlide = 0;
if (slides.length) {
  window.setInterval(() => {
    slides[activeSlide].classList.remove('is-active');
    activeSlide = (activeSlide + 1) % slides.length;
    slides[activeSlide].classList.add('is-active');
    slideCount.textContent = `0${activeSlide + 1} / 0${slides.length}`;
    slideLabel.textContent = slideLabels[activeSlide];
  }, 4000);
}
