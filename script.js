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
let percentage;

let divider = 100/7;
let ilustrationTrack=0;
let informationIllustrations = document.getElementsByClassName('jail');

let IS = document.querySelector('.information-slider');
//informationScroller.style.transform = 'translateY(50%)'


document.addEventListener('scroll',()=>{
    if ((window.scrollY >= stickyDistance)&&(window.scrollY <= stickyDistance+sitckyContainer.getBoundingClientRect().height-window.innerHeight)){
        percentage = (((window.scrollY-stickyDistance)/(stickyDistance+sitckyContainer.getBoundingClientRect().height-window.innerHeight - stickyDistance))*100);
        ilustrationTrack = Math.trunc(percentage/divider);
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



let open = document.getElementsByClassName('open');
let close = document.getElementsByClassName('close');
let popupInfo = document.getElementsByClassName('hide-info');
let opacity;


let stickyCreators = document.querySelector('.sitcky-creators')
let creatorContainer = document.querySelector('.creators-container')

let creatorsDistance = stickyCreators.getBoundingClientRect().top + window.scrollY;
let stickyHeight = stickyCreators.getBoundingClientRect().height;
let containerHeight = creatorContainer.getBoundingClientRect().height;
let smallGapHeight = stickyHeight - containerHeight;
let creatorPercentage;
creatorPercentage  = 0;

document.addEventListener('scroll',()=>{
    if((window.scrollY >= creatorsDistance) && (window.scrollY <= creatorsDistance+ smallGapHeight)){
            creatorPercentage = ((window.scrollY - creatorsDistance)/((creatorsDistance+ smallGapHeight)-creatorsDistance))
            creatorContainer.style.opacity = `${creatorPercentage}`;
    }
})

document.addEventListener('scroll',()=>{
    if (window.scrollY < creatorsDistance){
        creatorPercentage  = 0;
        creatorContainer.style.opacity = `${creatorPercentage}`;
    }
    else if (window.scrollY > creatorsDistance+ smallGapHeight){
        creatorPercentage  = 1;
        creatorContainer.style.opacity = `${creatorPercentage}`;
    }
})


for(let i = 0; i<2; i++){
    open[i].addEventListener('click',()=>{
        open[i].parentElement.nextElementSibling.classList.add('showInformationAnimation')
        open[i].parentElement.nextElementSibling.classList.remove('hideInformationAnimation')
    })
}
for(let i = 0; i<2; i++){
    close[i].addEventListener('click',()=>{
        close[i].parentElement.classList.add('hideInformationAnimation')
        close[i].parentElement.classList.remove('showInformationAnimation')
    })
}



let OTY = document.querySelector('.OTY-FIFTHER');
let OTYheight = OTY.getBoundingClientRect().height;
let OTYydistance = OTY.getBoundingClientRect().top + window.scrollY;
let OTYpercentage;
let auxiliar = document.querySelector('.auxiliar-container');
let pixels = 0;


let imagesCOntainer = document.querySelector('.OTY-IMAGES-CONTAINER')
let width = imagesCOntainer.getBoundingClientRect().width;
let height = imagesCOntainer.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if((window.scrollY >= OTYydistance) && (window.scrollY<=((OTYydistance+OTYheight)-auxiliar.getBoundingClientRect().height))){
        OTYpercentage = (window.scrollY - OTYydistance)/((OTYydistance+OTYheight-auxiliar.getBoundingClientRect().height) - OTYydistance);
        pixels = OTYpercentage * width;
 
        console.log(pixels)

        imagesCOntainer.style.transform = `translateX(-${pixels}px)`
    }
    if (window.scrollY <= OTYydistance){
        pixels = 0;
        imagesCOntainer.style.transform = `translateX(-${pixels}px)`
    } else if (window.scrollY > (OTYydistance + OTYheight)-height){
        pixels = width+200;
        imagesCOntainer.style.transform = `translateX(-${pixels}px)`
    }
})






let ranger = document.querySelector('.ranger');
let RIGHT = document.querySelector('.RIGHT')
let LEFT = document.querySelector('.LEFT')
RIGHT.style.width = '50%';
LEFT.style.width = '50%';

ranger.addEventListener('input',(e)=>{
    console.log(ranger.value);
    if(ranger.value<50){
        RIGHT.style.width = `${100-ranger.value}%`;
        LEFT.style.width = `${ranger.value}%`;
        console.log('less than 50')
    }
    if (ranger.value >= 50){
        console.log('more than 50')
        RIGHT.style.width = `${100-ranger.value}%`;
        LEFT.style.width = `${ranger.value}%`;
    }
})