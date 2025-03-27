document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab__link');
  const contents = document.querySelectorAll('.project-page');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = this.dataset.tab;
      buttons.forEach(btn => btn.classList.remove('tab__link--active'));
      contents.forEach(content => content.classList.remove('project-page-active'));

      this.classList.add('tab__link--active');

      setTimeout(() => {
        document.getElementById(tabId).classList.add('project-page-active');

      }, 10);
    });
  });
});

// Modal -project-details
const prevBtn = document.querySelector('.btn-modal-prev');
const nextBtn = document.querySelector('.btn-modal-next');

const slider = document.querySelector('.slider');
const slide = document.querySelector('.slider-line');
const sliderCard = document.querySelectorAll('.slide-img');
let currentSlide = 0;

function updateSlider() {
  let slideWidth = sliderCard[0].clientWidth;
  slide.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  slide.style.transition = "transform 0.5s ease-in-out";

}
console.log(sliderCard);

nextBtn.addEventListener('click', () => {
  if (currentSlide < sliderCard.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
})

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = sliderCard.length - 1;
  }
  updateSlider()
})
// Modal -close


document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementById('modal');
  const fullProject = document.getElementById('fullContent');
  const closeBtn = document.querySelector('.modal-close')
  const zoomBtn = document.querySelector('.descr-image__btn');


  zoomBtn.addEventListener('click', function () {
    if (modal.classList.contains('modal--active')){
      modal.classList.remove('modal--active')
      setTimeout(() => {
        modal.style.display = 'none'; 
      }, 300);  
    } else {
      modal.style.display = 'flex';  
      modal.classList.add('modal--active');  
    }

    });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal--active');
    setTimeout(() => {
      modal.style.display = 'none'; 
    }, 300); 
  })


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal--active');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });
  
});






