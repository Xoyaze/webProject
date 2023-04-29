let container = document.getElementsByClassName('project');


let firstText = document.getElementsByClassName("firstText");
let thirdText = document.getElementsByClassName("thirdText");
let firstImage = document.getElementById("firstProjectImage");
let secondImage = document.getElementById("secondProjectImage");
let fourthImage = document.getElementById("fourthProjectImage");
let video = document.getElementById("video");

let buttonOne = document.getElementById("buttonOne");
let buttonThree = document.getElementById("buttonThree");

buttonOne.onclick = function(){
    firstText[0].style.opacity = '1';
} 

buttonThree.onclick = function(){
    thirdText[0].style.opacity = '1';
}


container[0].addEventListener('mouseover',function(){
    firstText[0].style.top = '10%';
    firstImage.style.scale = '1.05';
    firstImage.style.borderRadius = '6%';

})

container[0].addEventListener('mouseleave',function(){
    firstText[0].style.opacity = '0';
    firstText[0].style.top = '-100%';
    firstImage.style.scale = '1';
    firstImage.style.borderRadius = '5%';
})

container[1].addEventListener('mouseover',function(){
    // firstText[0].style.top = '10%';
    secondImage.style.scale = '1.05';
    secondImage.style.borderRadius = '6%';
    
})

container[1].addEventListener('mouseleave',function(){
    // firstText[0].style.opacity = '0';
    // firstText[0].style.top = '-100%';
    secondImage.style.scale = '1';
    secondImage.style.borderRadius = '5%';
})

container[2].addEventListener('mouseover',function(){
    thirdText[0].style.top = '70%';
    video.style.backgroundColor = '#73A5A4';
})

container[2].addEventListener('mouseleave',function(){
    thirdText[0].style.opacity = '0';
    thirdText[0].style.top = '-100%';
    video.style.backgroundColor = 'rgb(62,42,30)';
})

container[3].addEventListener('mouseover',function(){
    // firstText[0].style.top = '10%';
    fourthImage.style.scale = '1.05';
    fourthImage.style.borderRadius = '6%';
})

container[3].addEventListener('mouseleave',function(){
    // firstText[0].style.opacity = '0';
    fourthImage.style.scale = '1';
    fourthImage.style.borderRadius = '5%';
})
