
const play = document.querySelector('.btn-play');
const video = document.querySelector('.video-wrapper video');
play.addEventListener('click', ()=> {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('about__play--hidden');
})