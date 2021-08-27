const getWeather = () => {
    const getCityInputField = document.getElementById('city-name');
    const cityName = getCityInputField.value;
    getCityInputField.value = '';
    const apiKey = 'ddd34d39aa683afb00436cc173a4f980';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const tempCelcius = data.main.temp - 273.15;
            const showWeather = document.getElementById('show-weather');
            showWeather.innerHTML = `
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h1>${data.name}</h1>
                <h3><span>${tempCelcius.toFixed(2)}</span>&deg;C</h3>
                <h1 class="lead">${data.weather[0].main}</h1>
            `
        });
}
