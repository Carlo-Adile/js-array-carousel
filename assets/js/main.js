/* my img array */
const slides = [
  '01.webp',
  '02.webp',
  '03.webp',
  '04.webp',
  '05.webp',
];

/* img in position 0 has class active */
let activeImage = 0;
const slidesElement = document.querySelector('.slides');

/* use buttons */
const prevElement = document.querySelector('.previous');
const nextElement = document.querySelector('.next');

/* change active image with buttons and event listener  */
prevElement.addEventListener('click', function(){
  /* left column */
  const currentActiveImage = slidesElement.querySelector('img.active');
  currentActiveImage.classList.remove('active');

  activeImage = (activeImage === 0) ? slides.length - 1 : activeImage - 1;

  slidesElement.querySelectorAll('img')[activeImage].classList.add('active');

  /* right column */
  const rightSlides = document.querySelectorAll('.right-slides img');

  rightSlides.forEach(slide => slide.classList.remove('active'));
  rightSlides[activeImage].classList.add('active');
});

nextElement.addEventListener('click', function(){
  const currentActiveImage = slidesElement.querySelector('img.active');
  currentActiveImage.classList.remove('active');

  activeImage = (activeImage === slides.length - 1) ? 0 : activeImage + 1;

  slidesElement.querySelectorAll('img')[activeImage].classList.add('active');

  const rightSlides = document.querySelectorAll('.right-slides img');
  rightSlides.forEach(slide => slide.classList.remove('active'));
  rightSlides[activeImage].classList.add('active');
});

/* generate img dinamically */
for(let index = 0; index < slides.length; index++){
  const slide = slides[index];
  const slideMarkup = `<img class="${index === activeImage ? 'active': ''}" src="./assets/img/${slide}" alt="">`;
  slidesElement.insertAdjacentHTML('beforeend', slideMarkup);  
}

/* update the active class */
const currentImage = document.querySelector('img.active');
currentImage.classList.remove('active');

const allSlides = document.querySelectorAll('.slides img');
allSlides[activeImage].classList.add('active');

/* Add images to right slides */
const rightSlidesContainer = document.querySelector('.right-slides');

/* generate markup for right slides */
slides.forEach((slide, index) => {
  const slideMarkup = `<img src="./assets/img/${slide}" alt="" class="inactive">`;
  rightSlidesContainer.insertAdjacentHTML('beforeend', slideMarkup);
});


