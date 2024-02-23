/* my img array */
const slides = [
  '01.webp',
  '02.webp',
  '03.webp',
  '04.webp',
  '05.webp',
]

/* img in position 0 has class active */
let activeImage = 0;
const slidesElement = document.querySelector('.slides')

/* use buttons */
const prevElement = document.querySelector('.previous')
const nextElement = document.querySelector('.next')

prevElement.addEventListener('click', function(){
  /* activeImage++;
  console.log(activeImage) */
  // Remove active class from current image
  slidesElement.querySelector('img.active').classList.remove('active');

  // Update active image index
  activeImage = (activeImage === 0) ? slides.length - 1 : activeImage - 1;

  // Add active class to the new image
  slidesElement.querySelectorAll('img')[activeImage].classList.add('active');
})

nextElement.addEventListener('click', function(){
  /* activeImage--;  
  console.log(activeImage) */
  // Remove active class from current image
  slidesElement.querySelector('img.active').classList.remove('active');

  // Update active image index
  activeImage = (activeImage === slides.length - 1) ? 0 : activeImage + 1;

  // Add active class to the new image
  slidesElement.querySelectorAll('img')[activeImage].classList.add('active');
})

/* generate img dinamically */
for(let index = 0; index < slides.length; index++){
  const slide = slides[index];

  const slideMarkup = `<img class="${index === activeImage ? 'active': ''}" src="./assets/img/${slide}" alt="">`

  slidesElement.insertAdjacentHTML('beforeend', slideMarkup);
  
}

/* update the active class */
const currentImage = document.querySelector('img.active')
currentImage.classList.remove('active')

const allSlides = document.querySelectorAll('.slides img');

allSlides[activeImage].classList.add('active')


 