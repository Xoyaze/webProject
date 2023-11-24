//for the preLoader
var preLoaderContainer = document.getElementsByClassName('preLoader');
window.addEventListener('load', () => {
    //for when the page loads 
    preLoaderContainer[0].style.display = "none";
    setTimeout( () =>{
        greetingCard.classList.add("active");
    }, 1500);
});

//for the left greeting card
var greetingCard = document.getElementById("greetingCard");
var greeter = document.querySelector(".greetingCard");

//for starting the card slider
var toggleCardSlider = document.getElementById("seePeopleButton");
var cardToggled = false;
function activateCards(){
    cardsContainer.classList.add('activated');
    startScroll();
    setInterval(returnToTop, 24000);
}
toggleCardSlider.onclick = () => {
    if(cardToggled) return;
    activateCards();
    cardToggled = true
}


//for the navigation buttons
var navigationButtons = document.getElementsByClassName('navigationButton');
navigationButtons[0].onclick = () => {
    for(var i=0; i<4; i++){
        navigationButtons[i].classList.remove('activeNavigator');
    }
    navigationButtons[0].classList.add('activeNavigator');
}
navigationButtons[1].onclick = () => {
    for(var i=0; i<4; i++){
        navigationButtons[i].classList.remove('activeNavigator');
    }
    navigationButtons[1].classList.add('activeNavigator');
}
navigationButtons[2].onclick = () => {
    for(var i=0; i<4; i++){
        navigationButtons[i].classList.remove('activeNavigator');
    }
    navigationButtons[2].classList.add('activeNavigator');
}
navigationButtons[3].onclick = () => {
    for(var i=0; i<4; i++){
        navigationButtons[i].classList.remove('activeNavigator');
    }
    navigationButtons[3].classList.add('activeNavigator');
}



//for the background card animation 
var backgroundStars = document.getElementById('backgroundStars');
var backgroundMoon = document.getElementById('backgroundMoon');
var midBackgroundLeft = document.getElementById('midBackgroundLeft');
var midBackgroundRight = document.getElementById('midBackgroundRight');
var foregroundTwo = document.getElementById('foreGroundTwo');
var foreground = document.getElementById('foreGround');

window.addEventListener('scroll', () => {

    let value = window.scrollY;
    backgroundMoon.style.top = value * -.8 + 'px';

    if(value < 10){
        midBackgroundLeft.style.left = '-2%';
    }else{
        midBackgroundLeft.style.left = value * -1 + 'px';
    }
    midBackgroundRight.style.left = value * .4 + 'px';

    if(value < 240){
        greetingCard.style.opacity = '1';
    }else{
        greetingCard.style.opacity = '0';
        cardToggled = false;
        cardsContainer.classList.remove('activated');
    }
});









//for auto scrolling card animation
var scrollingContainer = document.getElementsByClassName('slidingCards');
var isScrolling;
var autoScrollInterval;


function returnToTop(){
    
    if(cardsContainer.scrollTop >= cardsContainer.scrollHeight - cardHeight - 50){
        stopAutoScroll();
        if(isScrolling) return;
        setTimeout(startScroll, 4000);
        cardsContainer.scrollTop = 0;
    }else{return;}
}

function autoScroll(){
    if(mouseDowned){
        return;
    }
    cardsContainer.scrollTop += cardWidth;
}

function startScroll(){
    isScrolling = true;
    autoScrollInterval = setInterval(autoScroll, 4000);
}

function stopAutoScroll(){
    isScrolling = false;
    clearInterval(autoScrollInterval);
}


//for when the sliding cards are used
var cardsContainer;
var tempo = document.getElementsByClassName("slidingCardsContainer");
cardsContainer = tempo[0];
var cardWidth = document.getElementById("firstCard").offsetWidth;
var cardHeight = document.getElementById("firstCard").offsetHeight;


//varaibles for mouse tracking
var mouseDowned;
var startClickPosition;

//varaibles for scroll tracking
var containerPosition;

//for when the mouse is down
function mouseIsDown(e){
    mouseDowned = true;
    cardsContainer.classList.add("dragging");
    startClickPosition = e.y;
    containerPosition = cardsContainer.scrollTop;
    console.log("The card's height is: " + cardHeight);
    console.log("The container scroll height is: " + cardsContainer.scrollHeight)
    console.log("The container scroll position is: " + cardsContainer.scrollTop);
    console.log("The calculated height is: " + (cardsContainer.scrollHeight - cardHeight - 50));
}

//for when the click is let go off
function mouseIsUp(){
    mouseDowned = false;
    cardsContainer.classList.remove("dragging");
}

//for when the mouse is moving inside the container
function mouseIsMovingInsideContainer(e){
    if(mouseDowned){
        cardsContainer.scrollTop = containerPosition - (e.y - startClickPosition);
    }else{
        return;
    }
}

//for when the mouse leaves the container
function mouseLeftTheContainer(){
    mouseDowned = false;
    cardsContainer.classList.remove("dragging");
}


//event listeners for when the action unfolds, lol
cardsContainer.addEventListener('mousedown', mouseIsDown);
cardsContainer.addEventListener('mouseup', mouseIsUp);
cardsContainer.addEventListener('mouseleave', mouseIsUp);
cardsContainer.addEventListener('mouseleave', () => {
    startScroll();
});
cardsContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
});
cardsContainer.addEventListener('mousemove', mouseIsMovingInsideContainer);



// The projects section scripting starts here

var cityName = document.getElementById('cityName');
var humidity = document.getElementById('mainHumidity');
var humidityLoader = document.getElementsByClassName('humidityLoader');
var displayedCityName = document.getElementById('displayedCityName');
var temperature = document.getElementById('mainTemperature');
var feelsLikeTemperature = document.getElementById('feelsLikeTemperature');
var windSpeed = document.getElementById('windSpeed');
var weather = document.getElementById('weatherForScript');
var weatherImage = document.getElementById('weatherImage');

const apiKey = 'b3d9c4a94de27c70cb2fdea6081dc156';
var apiURL;

var searchButton = document.getElementById('searchButton');
var searchButton = document.getElementsByClassName('searchButton');

searchButton[0].addEventListener('mousedown' , () => {
    checkWeather();
});

async function checkWeather(){
    apiURL = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=' + apiKey;
    let response = await fetch(apiURL);
    let responseData = await response.json();
    
    
    if(responseData.name == undefined){
        displayedCityName.innerHTML = "Not found."
        humidity.innerHTML = "0%";
        windSpeed.innerHTML = "0km/h";
        weather.innerHTML = "No data";
    }else{
        displayedCityName.innerHTML = responseData.name;
    }

    windSpeed.innerHTML = responseData.wind.speed + " km/h";
    weather.innerHTML = responseData.weather[0].main;
    if(responseData.weather[0].main === "Clouds"){
        imageAtt = weatherImage.getAttribute("src");
        weatherImageChange("/assets/Images/weatherImages/clouds.png");
    }else if(responseData.weather[0].main === "Drizzle" || responseData.weather[0].main === "Rain"){
        weatherImageChange("/assets/Images/weatherImages/rain.png");
    }else if(responseData.weather[0].main === "Clear"){
        weatherImageChange("/assets/Images/weatherImages/clearSky.png");
    }else if(responseData.weather[0].main === "Thunderstorm"){
        weatherImageChange("/assets/Images/weatherImages/thunderStorm.png");
    }else if(responseData.weather[0].main === "Snow"){
        weatherImageChange("/assets/Images/weatherImages/snowFlake.png");
    }else if(responseData.weather[0].main === "Mist"){
        weatherImageChange("/assets/Images/weatherImages/mist.png");
    }else if(responseData.weather[0].main === "Haze"){
        weatherImageChange("/assets/Images/weatherImages/haze.png");
    }

    function weatherImageChange(source){
        weatherImage.style.transform = "translateX(150%)";
        setTimeout(callImage, 1050, source);
    }

    function callImage(source){
        weatherImage.src = source;
        weatherImage.style.transform = "translateX(0%)";
    }

    
    var count = 0;
    updateHumidity();
    updateTemperature();
    updateFeelsLike();

    function updateHumidity(){
        
        humidity.style.transition = (50*count) + "ms";

        if(count < responseData.main.humidity){
            humidity.innerHTML = count + "%";
            count++;
            setTimeout(updateHumidity, 30);
        }else{
            humidity.innerHTML = responseData.main.humidity + "%";

        }
    }
    var calculatedStyleForLoader = Math.abs((responseData.main.humidity - 100));
    humidityLoader[0].style.top = calculatedStyleForLoader + "%";

    function updateTemperature(){
        if(count < Math.floor((responseData.main.temp-273.15))){
            temperature.innerHTML = count + "°C";
            setTimeout(updateTemperature, 30);
        }else{
            temperature.innerHTML = Math.floor((responseData.main.temp-273.15)) + "°C";
        }
    }

    function updateFeelsLike(){
        if(count < Math.floor((responseData.main.feels_like - 273.15))){
            feelsLikeTemperature.innerHTML = count + "°C";
            setTimeout(updateFeelsLike, 30);
        }else{
            feelsLikeTemperature.innerHTML = Math.floor((responseData.main.feels_like - 273.15)) + "°C";
        }
    }

}

function sendEmail(){

    Email.send({
        SecureToken : "1f0e10ce-f01b-4107-853e-a1aed51a6832",
        To : 'pra.baduwal3@gmail.com',
        From : "hebad1462@gmail.com",
        Subject : "Contact from website",
        Body : "Email Address: "+ document.getElementById('email').value +  "Name: " + document.getElementById("name").value + "\nPhone no: " + document.getElementById("number").value + "\nMessage: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}