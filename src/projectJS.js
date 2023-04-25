
let firstContainer = document.getElementById("first");
let container = document.getElementsByClassName('project');
let hText = document.getElementsByClassName("firstText");
let buttonOne = document.getElementById("buttonOne");
let firstImage = document.getElementById("firstProjectImage");

container[0].addEventListener('mouseover',function(){
    hText[0].style.top = '10%';
    firstImage.style.scale = '1.05';
})

buttonOne.onclick = function(){
    hText[0].style.opacity = '1';
    console.log("hello there");
} 

container[0].addEventListener('mouseleave',function(){
    container[0].classList.toggle("Heythere!!!");
    console.log("It is unhovered on!");
    hText[0].style.opacity = '0';
    hText[0].style.top = '-100%';
    firstImage.style.scale = '1';
})