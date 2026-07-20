
const API_KEY = '896a533f8a8eea88fb683bb65b235b1f';
console.log("API Key:", API_KEY);

const input = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const errorMsg = document.getElementById('error-msg');

searchBtn.addEventListener('click', () => {
    let city = input.value.trim();
    city = city.replace(/\s+/g, ' ');
    if (!city) {
        errorMsg.textContent = 'Please enter a city name.';
        return;
    }
    getWeather(city);
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

async function getWeather(city) {
    errorMsg.textContent = '';

    try {
        const url =
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        console.log("Request URL:");
        console.log(url);
        const response = await fetch(url);
        console.log("HTTP Status:", response.status);
        const responseText = await response.clone().text();
        console.log("API Response:");
        console.log(responseText);
        if (response.status === 401) {
            errorMsg.textContent = 'Invalid API key.';
            return;
        }
        if (response.status === 404) {
            errorMsg.textContent = 'City not found.';
            return;
        }
        if (!response.ok) {
            errorMsg.textContent = `API Error: ${response.status}`;
            return;
        }
        const data = await response.json();
        console.log("Parsed JSON:");
        console.log(data);
        if (!data || !data.main || !data.weather) {
            errorMsg.textContent = 'No weather data available.';
            return;
        }
        updateUI(data);
    } catch (err) {
        console.error("Fetch Error:", err);
        errorMsg.textContent =
            'Unable to fetch weather data.';
    }
}

function updateUI(data) {
    document.getElementById('city-name').textContent =
        `${data.name}, ${data.sys.country}`;
    document.getElementById('temp').innerHTML =
        `${Math.round(data.main.temp)}<span>°C</span>`;
    document.getElementById('condition').textContent =
        capitalizeWords(data.weather[0].description);
    const iconCode = data.weather[0].icon;
    const icon = document.getElementById('weather-icon');
    icon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    icon.alt =
        data.weather[0].description;
    document.getElementById('humidity').textContent =
        `${data.main.humidity}%`;
    document.getElementById('wind').textContent =
        `${Math.round(data.wind.speed * 3.6)} km/h`;
    document.getElementById('feels-like').textContent =
        `${Math.round(data.main.feels_like)}°`;

    // right container
    document.getElementById('temp-min').textContent = Math.round(data.main.temp_min) + '°C';
    document.getElementById('temp-max').textContent = Math.round(data.main.temp_max) + '°C';
    document.getElementById('sunrise').textContent  = formatTime(data.sys.sunrise);
    document.getElementById('sunset').textContent   = formatTime(data.sys.sunset);
    document.getElementById('sea-level').textContent    = data.main.sea_level ? data.main.sea_level + ' hPa' : 'N/A';
    document.getElementById('ground-level').textContent = data.main.grnd_level ? data.main.grnd_level + ' hPa' : 'N/A';

    document.getElementById('footer-note').textContent =
        `Last updated: ${new Date().toLocaleString()}`;
    updateTimeDot();
}

function updateTimeDot() {
    const now = new Date();
    const hours =
        now.getHours() + now.getMinutes() / 60;
    const percent =
        (hours / 24) * 100;
    const dot =
        document.querySelector('.time-dot');
    if (dot) {
        dot.style.left = `${percent}%`;
    }
}

function capitalizeWords(text) {
    return text.replace(/\b\w/g, letter => letter.toUpperCase());
}

function formatTime(unixTime) {
    var date = new Date(unixTime * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

updateTimeDot();