//play plause video
const pausebtn = document.querySelector('.mybtn');
const video = document.querySelector('video');
const stories = document.querySelectorAll('.storyimg');
const modalimg = document.querySelector('.modalimg');
const modal = document.querySelector('.modal-container');
const close = document.querySelector('.closebtn');
const innerCaption = document.querySelector('.inner-caption');
const modalCaption = document.querySelector('.modal-caption');

//Play-pause video function
function playPause(btn){
    //pause video
    if(pausebtn.innerHTML == 'PAUSE'){
        pausebtn.innerHTML = 'PLAY';
        video.pause();
    }else{//play video
        pausebtn.innerHTML = 'PAUSE';
        video.play();
    }
}

//show story function
function showStory(story){
    //set modal image
    const image = story.getAttribute('src');
    modalimg.setAttribute('src', image);
    //set modal caption
    const caption = story.nextElementSibling.innerHTML;
    innerCaption.innerHTML = caption;
    //display modal
    modal.classList.remove('no-display');
    modal.classList.add('display-modal');
}

//close modal function
function closeModal(story, target){
    if(target!=modalimg && target!=modalCaption && target!=innerCaption){
        //hide modal
        modal.classList.remove('display-modal');
        modal.classList.add('no-display');
    
        //changing story border
        story.classList.remove('story-active');
        story.classList.add('story-inactive');
    }
}

//events
pausebtn.addEventListener('click', () => {
    playPause(pausebtn);
});

stories.forEach(story => {
    story.addEventListener('click', () => {
        showStory(story);

        modal.addEventListener('click', (e) => {
            closeModal(story, e.target)
        });
    });
});

//Swiper Functionality
var swiper = new Swiper(".mySwiper", {
    loop:true,
    slidesPerGroup: 1,
    centerSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
      },
  });


