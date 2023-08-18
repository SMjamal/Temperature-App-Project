const apiKey = "b6fc98da1e86f2c60b04fd0f1d7b4a67";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();
        // console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloud.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sunny.jpg"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.jpg"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.jpg"
    }
     else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.jpg"
    }

    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";

    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
