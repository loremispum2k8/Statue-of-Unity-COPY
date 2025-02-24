const navBar = document.querySelector('.nav-bar-container');
let scrollTrack;
let newScroll;
const curtain = document.querySelector('.navbar-curtain');


document.addEventListener('scroll', (e)=>{
    scrollTrack  =  window.scrollY;
    if (scrollTrack > newScroll){
        navBar.classList.add('scrolled')
        curtain.classList.add('showCurtain')
        curtain.style.display='block'
    } else {
        if(navBar.classList.contains('scrolled')){
            navBar.classList.remove('scrolled');
            curtain.classList.remove('showCurtain')
            curtain.style.display='none'
        }
    }
    newScroll = scrollTrack;
})

const video = document.querySelector('.video');
const playPause = document.querySelector('.play-button');
const play = document.getElementById('play');
const pause = document.getElementById('pause');

playPause.addEventListener('click',(e)=>{
    if(play.classList.contains('hidden')){
        play.classList.remove('hidden');
        pause.classList.add('hidden');
        video.pause();
    } else if(pause.classList.contains('hidden')){
        pause.classList.remove('hidden');
        play.classList.add('hidden');
        video.play();
    }
})





let carouselInnerContainer = document.querySelector('.carousel-inner-container');
let Translation = new Number;
let pastTr;


let left = document.querySelector('.left')
let right = document.querySelector('.right')

console.log(left)
console.log(right)

left.addEventListener('click',(e)=>{
    if(Translation>0){
        pastTr = Translation - 1015;

        let i = setInterval(()=>{
            if (Translation <= pastTr) {
                clearInterval(i);
            }

            Translation -= 10;
            carouselInnerContainer.style.transform = `translateX(-${Translation}px)`
        },1.1);
    }
})
right.addEventListener('click',(e)=>{
    if(Translation < 6180){
        pastTr = Translation + 1015;

        let i = setInterval(()=>{
            if (Translation >= pastTr) {
                clearInterval(i);
            }

            Translation += 10;
            carouselInnerContainer.style.transform = `translateX(-${Translation}px)`
        },1.1);


    }
})



let sitckyContainer = document.querySelector('.sticky-container');
let stickyDistance = sitckyContainer.getBoundingClientRect().top + window.scrollY;
console.log(window.innerHeight);
let percentage;

let divider = 100/7;
let ilustrationTrack=0;
let informationIllustrations = document.getElementsByClassName('jail');
console.log(informationIllustrations);

let IS = document.querySelector('.information-slider');
//informationScroller.style.transform = 'translateY(50%)'


document.addEventListener('scroll',()=>{
    if ((window.scrollY >= stickyDistance)&&(window.scrollY <= stickyDistance+sitckyContainer.getBoundingClientRect().height-window.innerHeight)){
        percentage = (((window.scrollY-stickyDistance)/(stickyDistance+sitckyContainer.getBoundingClientRect().height-window.innerHeight - stickyDistance))*100);
        ilustrationTrack = Math.trunc(percentage/divider);
        console.log(ilustrationTrack)
        for(let i=0;i<7;i++){
            if (i === ilustrationTrack){
                informationIllustrations[i].classList.add('showImage');
            } else if (( i !== ilustrationTrack) && informationIllustrations[i].classList.contains('showImage')){
                informationIllustrations[i].classList.remove('showImage');
            }
        }
        let ISoffet = ((percentage*IS.getBoundingClientRect().height)/100);
        if(ISoffet < (IS.getBoundingClientRect().height-800)){
            IS.style.transform = `translateY(-${ISoffet}px)`;
        }
    }
})
;





