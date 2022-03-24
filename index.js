const APP_ID = '651daf0af47eb49a9b65a0007afcce53';
const DEFAULT_VALUE = "_ _"

const searchInput = document.getElementById("search-input");

const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
searchInput.addEventListener("change", (event) => {
    // fetch(): Phương thức mặc định của Javascript để Gọi API từ Server của web khác về
    // web mình.
    console.log(event.target.value);
    // In ra dữ liệu mình nhập vào.
    /// Kéo dữ liệu từ WEB Openweathermap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${APP_ID}&lang=en&units=metric `)
        .then(async function (response) {
            const data = await response.json();

            console.log(data);
            cityName.innerHTML = data.name;
            weatherState.innerHTML = data.weather[0].description
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            temperature.innerHTML = Math.round(data.main.temp);

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('HH:mm');
            sunset.innerHTML = moment.unix(data.sys.sunset).format('HH:mm');
            humidity.innerHTML = data.main.humidity
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2)
            // Đổi đơn vị: m/s = (km/h)/3.6;
        })
    // .then(data => console.log(data));
})
