const input = document.querySelector(".search-section input");
const searchBtn= document.querySelector(".search-btn");
const weatherImage = document.querySelector(".weather-image");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humadityNum = document.querySelector(".humadityNum");
const windNum = document.querySelector(".windNum");
const weatherDetail = document.querySelector(".weather-details");


const apiKey ="f3b3299107c49c7e27178ee9d98bab70";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather(input) {
    const response = await fetch(apiUrl + input + `&appid=${apiKey}`);

    if(response.status == 404){
        alert("Please Correct Your City Spelling")
    }
    else{
        let data = await response.json();
    
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp)+"°C";
    city.innerHTML = data.name;
    humadityNum.innerHTML = data.main.humidity+" %";
    windNum.innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImage.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherImage.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherImage.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherImage.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherImage.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherImage.src = "images/snow.png";
    }
    

    weatherDetail.style.display = "block";

    }

}

searchBtn.addEventListener("click",()=>  {
    
    checkWeather(input.value);

})

