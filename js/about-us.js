
const caruoselRow = document.querySelector('.about-swiper');
const caruoselSlides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');


let index = 1;
var width;


function sliderWidth(){
  width = caruoselSlides[0].clientWidth;
}
sliderWidth()
window.addEventListener('resize', sliderWidth);
caruoselRow.style.transform = 'translateX('+ (- width * index) + 'px)';

function dotsLabel() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active--dot');
  }
  
  if (index - 1 >= 0 && index - 1 < dots.length) {
    dots[index - 1].classList.add('active--dot');
  }
}

nextBtn.addEventListener("click", nextSlide);
function nextSlide(){
  if(index >= caruoselSlides.length - 1){return};
  caruoselRow.style.transition = "transform 0.4s ease-out";
  index++;
  caruoselRow.style.transform = "translateX("+ (- width * index) + "px)";
  dotsLabel();
 }

prevBtn.addEventListener("click", prevSlide);
function prevSlide(){
  if(index <= 0){return};
  caruoselRow.style.transition = "transform 0.4s ease-out";
  index--;
  caruoselRow.style.transform = "translateX("+ (- width * index) + "px)";
  dotsLabel();

 }
//  возвращение на первый слайд после последнего слайда
caruoselRow.addEventListener('transitionend', function(){
  if(caruoselSlides[index].id==='firstImageDuplicate'){
    caruoselRow.style.transition = 'none';
    index = caruoselSlides.length - index;
    caruoselRow.style.transform = "translateX("+ (- width * index) + "px)";
    dotsLabel();

  }

  if(caruoselSlides[index].id==='lastImageDuplicate'){
    caruoselRow.style.transition = 'none';
    index = caruoselSlides.length - 2;
    caruoselRow.style.transform = "translateX("+ (- width * index) + "px)";
    dotsLabel();

  }
})

//  auto sliding
function autoSlide(){
deleteInterval = setInterval(timer, 4000);
function timer(){
  nextSlide()
}
}
autoSlide();

//Stop auto sliding whem mouse is over

const mainContainer = document.querySelector('.corusel-wrapper')

mainContainer.addEventListener('mouseover', function(){
  clearInterval(deleteInterval);
})

//resume sliding when mouse is out 



// slide touch

let startX = 0;
let endX = 0;

caruoselRow.addEventListener('touchstart', (event) =>{
startX = event.touches[0].clientX
});
caruoselRow.addEventListener('touchmove', (event) =>{
endX = event.touches[0].clientX
});

caruoselRow.addEventListener('touchend', () =>{
  if (startX - endX > 50){
    nextSlide();
    
  }else if(endX - startX > 50 ){
    prevSlide();
  }
});






