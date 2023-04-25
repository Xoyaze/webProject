let container = document.getElementsByClassName('project');


let firstText = document.getElementsByClassName("firstText");
let thirdText = document.getElementsByClassName("thirdText");

let buttonOne = document.getElementById("buttonOne");
let buttonThree = document.getElementById("buttonThree");

let firstImage = document.getElementById("firstProjectImage");

container[0].addEventListener('mouseover',function(){
    firstText[0].style.top = '10%';
    firstImage.style.scale = '1.05';
})

container[2].addEventListener('mouseover',function(){
    thirdText[0].style.top = '70%';
})


buttonOne.onclick = function(){
    firstText[0].style.opacity = '1';
} 

buttonThree.onclick = function(){
    thirdText[0].style.opacity = '1';
}

container[0].addEventListener('mouseleave',function(){
    firstText[0].style.opacity = '0';
    firstText[0].style.top = '-100%';
    firstImage.style.scale = '1';
})

container[2].addEventListener('mouseleave',function(){
    thirdText[0].style.opacity = '0';
    thirdText[0].style.top = '-100%';
})