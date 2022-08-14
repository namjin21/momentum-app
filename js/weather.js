const API_KEY = "e6e249aa9e76cf3f09dead972abe1a3b"; 

const onGeoSuccess = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather p");
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${Math.round(data.main.temp)} °C`;
    });
}

const onGeoError = () => {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);