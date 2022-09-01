let typeCity = document.querySelector('input')
let cityNamePlace = document.querySelector('h1')
const searchBtn = document.querySelector('button')
let currTemp = document.querySelector('.currentTemp')
let currWeather = document.querySelector('.currentWeather')
let firstday = document.querySelector('.st')
let secondday = document.querySelector('.nd')
let thirdday = document.querySelector('.rd')
let da= document.querySelectorAll('.da')
let estWeather1 =document.querySelector('.estWeather1')
let estWeather2 =document.querySelector('.estWeather2')
let estWeather3 =document.querySelector('.estWeather3')
let estTemp1 =document.querySelector('.estTemp1')
let estTemp2 =document.querySelector('.estTemp2')
let estTemp3 =document.querySelector('.estTemp3')

// aktualna pogoda
const currCityURL = 'https://api.openweathermap.org/data/2.5/weather?'
const URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = "&appid=be0de6a73f96bab637110b406d8dfee7&units=metric"
// przyszla pogoda
const currCityURLFUTURE ='http://api.openweathermap.org/data/2.5/forecast?'
const URLFUTURE ='http://api.openweathermap.org/data/2.5/forecast?q='

const test = 'siema'
const currCity = () => {

    navigator.geolocation.getCurrentPosition(succes, err)


    async function succes(position) {
        
        const lat = 'lat=' + position.coords.latitude
        const lon = 'lon=' + position.coords.longitude

        console.log(lat,lon);
        
        const fetchURLL = `${currCityURL}${lat}&${lon}${API_KEY}` 
        const fetchURLLFUTURE = `${currCityURLFUTURE}${lat}&${lon}&cnt=3${API_KEY}`
    
    
    const connectFuture = await fetch(fetchURLLFUTURE)
    const infoFuture = await connectFuture.json();
    console.log(infoFuture);
    const firstdayweather = infoFuture.list[0];
    const seconddayweather = infoFuture.list[1];
    const thirddayweather = infoFuture.list[2];

    console.log(firstdayweather);
    
    const connect = await fetch(fetchURLL);
    const info = await connect.json();
    console.log(info);
    cityNamePlace.innerHTML = info.name
    currTemp.innerHTML = Math.round(info.main.temp)+'°C'
    estTemp1.innerHTML = Math.round(firstdayweather.main.temp)+'°C'
    estTemp2.innerHTML = Math.round(seconddayweather.main.temp)+'°C'
    estTemp3.innerHTML = Math.round(thirddayweather.main.temp)+'°C'
    const weather = info.weather[0].main
    const weather1 =firstdayweather.weather[0].main
    const weather2 =seconddayweather.weather[0].main
    const weather3 =thirddayweather.weather[0].main    


    switch (weather, weather1, weather2, weather3) {
        case "Drizzle":
            currWeather.setAttribute("src", 'drizzle.gif');
            estWeather1.setAttribute("src", 'drizzle.gif');
            estWeather2.setAttribute("src", 'drizzle.gif');
            estWeather3.setAttribute("src", 'drizzle.gif');
            break;
        case "Rain":
            currWeather.setAttribute("src", 'rainy.gif');
            estWeather1.setAttribute("src", 'rainy.gif');
            estWeather2.setAttribute("src", 'rainy.gif');
            estWeather3.setAttribute("src", 'rainy.gif');
            break;
        case "Snow":
            currWeather.setAttribute("src", 'snow.gif');
            estWeather1.setAttribute("src", 'snow.gif');
            estWeather2.setAttribute("src", 'snow.gif');
            estWeather3.setAttribute("src", 'snow.gif');
            break;
        case "Clear":
            currWeather.setAttribute("src", 'Sunny.gif');
            estWeather1.setAttribute("src", 'Sunny.gif');
            estWeather2.setAttribute("src", 'Sunny.gif');
            estWeather3.setAttribute("src", 'Sunny.gif');
            break;
        case "Clouds":
            if (info.weather[0].description === 'few clouds') {
                currWeather.setAttribute("src", 'clouds&sun.gif')
                estWeather1.setAttribute("src", 'clouds&sun.gif');
                estWeather2.setAttribute("src", 'clouds&sun.gif');
                estWeather3.setAttribute("src", 'clouds&sun.gif');
            } else {
                currWeather.setAttribute("src", 'clouds.gif')
                estWeather1.setAttribute("src", 'clouds.gif');
                estWeather2.setAttribute("src", 'clouds.gif');
                estWeather3.setAttribute("src", 'clouds.gif');
            }
            break;
        case "Thunderstorm":
            currWeather.setAttribute("src", 'storm.gif');
            estWeather1.setAttribute("src", 'storm.gif');
            estWeather2.setAttribute("src", 'storm.gif');
            estWeather3.setAttribute("src", 'storm.gif');
            break;    
            default:
                console.log('hmm');
            break;
    }
    }

    function err(params) {
        console.log(error);
    }

    // console.log(cord);    

    
    
}
currCity()

searchBtn.addEventListener('click',async function(){
    
let cityName = typeCity.value
console.log(cityName);
    
 const fetchURL = `${URL}${cityName}${API_KEY}` 
 const fetchURLFUTURE = `${URLFUTURE}${cityName}&cnt=3${API_KEY}`
    
    const connectFuture = await fetch(fetchURLFUTURE)
    const infoFuture = await connectFuture.json();
    console.log(infoFuture);
    const firstdayweather = infoFuture.list[0];
    const seconddayweather = infoFuture.list[1];
    const thirddayweather = infoFuture.list[2];
    
    console.log(firstdayweather.main.temp);

    const connect = await fetch(fetchURL);
    const info = await connect.json();
    cityNamePlace.innerHTML = info.name
    currTemp.innerHTML = Math.floor(info.main.temp)+'°C'
    estTemp1.innerHTML = Math.round(firstdayweather.main.temp)+'°C'
    estTemp2.innerHTML = Math.round(seconddayweather.main.temp)+'°C'
    estTemp3.innerHTML = Math.round(thirddayweather.main.temp)+'°C'
    const weather = info.weather[0].main
    const weather1 =firstdayweather.weather[0].main
    const weather2 =seconddayweather.weather[0].main
    const weather3 =thirddayweather.weather[0].main 
    console.log(weather);
    
    switch (weather,weather1,weather2,weather3) {
        case "Drizzle":
            currWeather.setAttribute("src", 'drizzle.gif');
            estWeather1.setAttribute("src", 'drizzle.gif');
            estWeather2.setAttribute("src", 'drizzle.gif');
            estWeather3.setAttribute("src", 'drizzle.gif');
            break;
        case "Rain":
            currWeather.setAttribute("src", 'rainy.gif');
            estWeather1.setAttribute("src", 'rainy.gif');
            estWeather2.setAttribute("src", 'rainy.gif');
            estWeather3.setAttribute("src", 'rainy.gif');
            break;
        case "Snow":
            currWeather.setAttribute("src", 'snow.gif');
            estWeather1.setAttribute("src", 'snow.gif');
            estWeather2.setAttribute("src", 'snow.gif');
            estWeather3.setAttribute("src", 'snow.gif');
            break;
        case "Clear":
            currWeather.setAttribute("src", 'Sunny.gif');
            estWeather1.setAttribute("src", 'Sunny.gif');
            estWeather2.setAttribute("src", 'Sunny.gif');
            estWeather3.setAttribute("src", 'Sunny.gif');
            break;
        case "Clouds":
            if (info.weather[0].description === 'few clouds') {
                currWeather.setAttribute("src", 'clouds&sun.gif')
            } 
            else {
                currWeather.setAttribute("src", 'clouds.gif')
            }
            
            break;
        case "Thunderstorm":
            currWeather.setAttribute("src", 'storm.gif');
            break;    
            default:
                console.log('hmm');
            break;
    }

    switch (weather1) {
        case "Drizzle":
            estWeather1.setAttribute("src", 'drizzle.gif');
            break;
        case "Rain":
            estWeather1.setAttribute("src", 'rainy.gif');
            break;
        case "Snow":
            estWeather1.setAttribute("src", 'snow.gif');
            break;
        case "Clear":
            estWeather1.setAttribute("src", 'Sunny.gif');
            break;
        case "Clouds":
            if (firstdayweather.weather[0].description === 'few clouds') {
                estWeather1.setAttribute("src", 'clouds&sun.gif')
            } 
            else {
                estWeather1.setAttribute("src", 'clouds.gif')
            }
            break;
        case "Thunderstorm":
            estWeather1.setAttribute("src", 'storm.gif');
            break;    
            default:
                console.log('hmm');
            break;
    }
    switch (weather2) {
        case "Drizzle":
            estWeather2.setAttribute("src", 'drizzle.gif');
            break;
        case "Rain":
            estWeather2.setAttribute("src", 'rainy.gif');
            break;
        case "Snow":
            estWeather2.setAttribute("src", 'snow.gif');
            break;
        case "Clear":
            estWeather2.setAttribute("src", 'Sunny.gif');
            break;
        case "Clouds":
            if (seconddayweather.weather[0].description === 'few clouds') {
                estWeather2.setAttribute("src", 'clouds&sun.gif')
            } 
            else {
                estWeather2.setAttribute("src", 'clouds.gif')
            }
            break;
        case "Thunderstorm":
            estWeather2.setAttribute("src", 'storm.gif');
            break;    
            default:
                console.log('hmm');
            break;
    }
    switch (weather2) {
        case "Drizzle":
            estWeather3.setAttribute("src", 'drizzle.gif');
            break;
        case "Rain":
            estWeather3.setAttribute("src", 'rainy.gif');
            break;
        case "Snow":
            estWeather3.setAttribute("src", 'snow.gif');
            break;
        case "Clear":
            estWeather3.setAttribute("src", 'Sunny.gif');
            break;
        case "Clouds":
            if (thirddayweather.weather[0].description === 'few clouds') {
                estWeather3.setAttribute("src", 'clouds&sun.gif')
            } 
            else {
                estWeather3.setAttribute("src", 'clouds.gif')
            }
            break;
        case "Thunderstorm":
            estWeather3.setAttribute("src", 'storm.gif');
            break;    
            default:
                console.log('hmm');
            break;
    }
    
    

})

console.log(da);
let day = new Date().getDay()
switch (day) {
        case 1:
            firstday.innerHTML='Tue'
            secondday.innerHTML='Wed'
            thirdday.innerHTML='Thur'
            break;
        case 2:
            firstday.innerHTML='Wed'
            secondday.innerHTML='Thur'
            thirdday.innerHTML='Fri'
            break;
        case 3:
            firstday.innerHTML='Thur'
            secondday.innerHTML='Fri'
            thirdday.innerHTML='Sat'
            break;
        case 4:
            firstday.innerHTML='Fri'
            secondday.innerHTML='Sat'
            thirdday.innerHTML='Sun'
            break;
        case 5:
            firstday.innerHTML='Sat'
            secondday.innerHTML='Sun'
            thirdday.innerHTML='Mon'
            break;
        case 6:
            firstday.innerHTML='Sun'
            secondday.innerHTML='Mon'
            thirdday.innerHTML='Tue'
            break;
        case 0:
            firstday.innerHTML='Mon'
            secondday.innerHTML='Tue'
            thirdday.innerHTML='Wed'
            break;
    
        default:
            break;
    }



